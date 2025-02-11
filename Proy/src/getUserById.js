const users = [
    {
        name: 'John',
        id: 1,
    }, 
    {
        name: 'Jane',
        id: 2
    }
];

const  getUserById = (id, callback) => {
    const user = users.find(user => user.id === id);

    if (!user) {
        return callback(`User with id ${id} not found.`);
    }

    return callback(null, user);
}

module.exports = {
    getUserById
}