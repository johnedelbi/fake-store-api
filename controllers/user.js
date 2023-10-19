const userController = {
    setCookieAndSession: (req, res) => {
        req.session.userName = 'JohnEdelbi';
        res.cookie('name', 'john', { maxAge: 5 * 60 * 1000 });
        res.send('hello');
    },

    verifyUserCookieAndSession: (req, res) => {
        const { name } = req.cookies;
        console.log(name);
        console.log(req.session.userName);
        if (req.session && req.session.userName && name) {
            const userName = req.session.userName;
            res.send(`hello ${name} your username is: ${userName}`);
        } else {
            res.send('session or cookie is not valid');
        }
    }
};

export default userController;
