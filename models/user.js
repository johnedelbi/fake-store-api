import { v4 as newId } from 'uuid';

let user = [
    {
        id: '1',
        email: 'john@john.com',
        password: '123456'
    }
];

class User {
    constructor(email, password) {
        this.id = newId();
        this.email = email;
        this.password = password;
    }

    addUser = () => {
        user.push(this);
    };

    static getUserByEmail = (email) => {
        return user.find((user) => user.email === email);
    };
}

export default User;
