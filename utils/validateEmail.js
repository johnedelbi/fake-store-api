const validateEmail = (email) => {
    // Validate email pattern
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(email);
};

export default validateEmail;
