const isLoggedIn = (req, res, next) => {
    const isLoggedIn = req.session.email;
    if (isLoggedIn) {
        console.log(isLoggedIn);
        return true;
    } else {
        console.log(isLoggedIn);
        res.status(302).redirect('./');
        return false;
    }
    next();
};

export default isLoggedIn;
