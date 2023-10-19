const validatePassword = (password) => {
    // Validate password pattern
    const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return pattern.test(password);
};

export default validatePassword;
