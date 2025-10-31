
export const checkValidData = ( email, password) => {   
    // // Name validation: at least 2 characters, not just whitespace
    // if (typeof name === 'string' && name.trim().length > 0 && name.trim().length < 2) {
    //     return { valid: false, message: "Name must be at least 2 characters." };
    // }
    // if (typeof name === 'string' && name.trim().length === 0) {
    //     return { valid: false, message: "Name is required." };
    // }

    // email regex pattern /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isEmailValid = emailPattern.test(email);

    // password regex pattern /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isPasswordValid = passwordPattern.test(password);

    if(!isEmailValid) return { valid: false, message: "Invalid email format." };
    if(!isPasswordValid) return { valid: false, message: "Password is not valid." }; 
    
    return { valid: true, message: "Valid data." };
}