import validateEmail from '../utils/validateEmail.js';
import validatePassword from '../utils/validatePassword.js';
import User from '../models/user.js';

const userController = {
    getForm: (req, res) => {
        const emailSession = req.session.email;
        console.log(emailSession);
        if (emailSession) {
            res.status(200).render('message', {
                title: '! you are already logged in ',
                message: `what ever you try you can't sign out until 1h mr. ${emailSession}`,
                href: './',
                linkText: 'try to login again if you want'
            });
        } else {
            res.status(200).render('form', {
                action: '/user/signup',
                buttonText: 'signup'
            });
        }
    },

    loggedIn: (req, res) => {
        const { email } = req.body;
        console.log(email);
        if (email) {
            req.session.email = 'email';
            res.cookie('email', email, { maxAge: 60 * 60 * 1000 });
            res.status(200).render('message', {
                title: 'Hello you are logged in ',
                message: `and your email is ${email}`,
                href: './',
                linkText: 'try to login again'
            });
        } else {
            res.status(404).render('message', {
                title: 'something wrong ',
                message: 'please contact admin',
                href: './',
                linkText: 'try to login again'
            });
        }
    },

    loginForm: (req, res) => {
        res.status(200).render('form', {
            action: './',
            buttonText: 'login'
        });
    },

    signupUser: (req, res) => {
        const { email, password } = req.body;
        const validEmail = validateEmail(email);
        const validPassword = validatePassword(password);
        if (User.getUserByEmail(email)) {
            res.status(409).render('message', {
                title: 'Email exist',
                message:
                    'the email you are trying to signup with already existed',
                href: './',
                linkText: 'Try Again'
            });
        } else if (validEmail && validPassword) {
            const newUser = new User(email, password);
            newUser.addUser();
            res.status(200).render('message', {
                title: 'signup successfully ',
                message: 'user has been registered',
                href: './login',
                linkText: 'click to login'
            });
        } else {
            res.status(409).render('message', {
                title: 'Email or Password not correct',
                message: 'email or password you are trying to use is not valid',
                href: './',
                linkText: 'Try Again'
            });
        }
    }
};

export default userController;
