import e from 'express';

let user = [
    {
        email: 'john@john.com',
        password: '123456'
    }
];

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    addUser = () => {
        user.push(this);
    };

    static getUserByEmail = (email) => {
        return user.find((user)=> user.email === email);
    };

}

export default User;
