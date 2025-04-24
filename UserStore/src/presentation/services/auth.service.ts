import { UserModel } from "../../data";
import { bcrypt, envs, JWT } from "../../config";
import {
    CustomError,
    LoginUserDto,
    RegisterUserDto,
    UserEntity
} from "../../domain";
import { EmailService } from "./email.service";

export class AuthService {
    constructor(
        private readonly emailService: EmailService
    ) {}

    public async registerUser(registerUserDto: RegisterUserDto) {
        const existsUser = await UserModel.findOne({ email: registerUserDto.email });

        if (existsUser) throw CustomError.badRequest('Email already exists');

        try {
            const user = new UserModel(registerUserDto);
            user.password = bcrypt.hash(registerUserDto.password);
            await user.save();
            await this.sendEmailValidationLink(user.email);

            const { password, ...userEntity } = UserEntity.fromObject(user);
            return {
                user: userEntity,
                token: 'ABC'
            };
        } catch (error) {
            throw CustomError.internalServer(`${error}`);
        }
    }

    public async loginUser(loginUserDto: LoginUserDto) {
        const existsUser = await UserModel.findOne({ email: loginUserDto.email });

        if (!existsUser) throw CustomError.badRequest('User not found');

        const passwordValidation = bcrypt.compare(loginUserDto.password, existsUser.password);
        
        if (!passwordValidation) throw CustomError.badRequest('Wrong password');

        const { password, ...userEntity } = UserEntity.fromObject(existsUser);

        const token = await JWT.generateToken({ id: existsUser.id });
        if (!token) throw CustomError.internalServer('Error while creating JWT');

        return {
            user: userEntity,
            token
        };
    }

    private async sendEmailValidationLink(email: string) {
        const token = await JWT.generateToken({ email });

        if (!token) throw CustomError.internalServer('Error getting token');

        const link = `${envs.WEBSERVICE_URL}/auth/validate-email/${token}`;
        const html = `
            <h1>Validate yout email</h1>
            <p>Click on the following link to validate your email</p>
            <a href="${link}">Validate your email: ${email}</a> 
        `;

        const options = {
            to: email,
            subject: 'Validate your email',
            htmlBody: html
        };

        const isSent = await this.emailService.sendEmail(options);
        if (!isSent) throw CustomError.internalServer('Error sending email');
    
        return true;
    }

    public async validateEmail(token: string) {
        const payload = await JWT.validateToken(token);
        if (!payload) throw CustomError.unauthorized('Invalid token');

        const { email } = payload as { email: string };
        if (!email) throw CustomError.internalServer('Email not in token');
        
        const user = await UserModel.findOne({ email });
        if (!user) throw CustomError.internalServer('Email not exists');
        
        user.emailValidated = true;
        await user.save();

        return true;
    }
}