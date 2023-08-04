const validation = (userData) => {
    const errors = {};

    if (!/^(?=.*[A-Z])(?=.*\d).{5,}$/.test(userData.password)) {
        errors.password =
            "Must have a capital, a number and at leat six characters";
    }

    if (!/^\S{1,35}@\S+\.\S+$/.test(userData.email)) {
        errors.email = "enter a valid eMail";
    }

    if (!userData.password) {
        errors.password = "";
    }

    if (!userData.email) {
        errors.email = "";
    }

    return errors;
};

export default validation;
