import { publicGetApi, publicPostApi } from '../apis/API';

export const siginup = async (username, email, password, firstName, lastName) => {
    const data = {
        username,
        email,
        password,
        firstName,
        lastName
    }
    let response = await publicPostApi('/user/register', data)
    return response
};

export const verifyEmail = async (confirmationCode) => {
   
    try {
        let response = await publicGetApi(`/user/confirm/${confirmationCode}`)
        return response;
    } catch (error) {
        console.log(error)
    }
}