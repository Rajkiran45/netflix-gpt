export const checkValidData = (email, password)=>{
    // const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9,-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // if(!isNameValid) return 'Name is not in a valid format';
    if(!isEmailValid) return 'Email Id is not a valid email';
    if(!isPasswordValid) return 'Password Id is not a valid password';

    return null;
}