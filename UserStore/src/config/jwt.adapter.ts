import jwt from 'jsonwebtoken';

export class JWT {
    static generateToken(payload: any, duration: string = '2h') {
        return new Promise((resolve) => {
            jwt.sign(payload, "SEED", { expiresIn: parseInt(duration) * 3600 }, (err, token) => {
                if (err) return resolve(null);
                resolve(token);
            });
        });
    }

    static validateToken(token: string) {
        return new Promise((resolve) => {
            jwt.verify(token, "SEED", (err, decoded) => {
                if (err) return resolve(null);
                resolve(decoded);
            })
        });
    }
}