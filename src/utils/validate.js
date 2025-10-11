
export const checkValidData = (email, password) => {   
 
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