export const buildCreatePerson = (getId, getAge) => {
    return ({ name, birthdate } ) => {
        return {
            id: getId(),
            name,
            birthdate,
            age: getAge(birthdate)
        }
    };
}