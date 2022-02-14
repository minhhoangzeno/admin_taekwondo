import { privatePostApi, publicPostApi, publicGetApi } from '../apis/API';

export const login = async (username, password) => {
    const data = {
        username,
        password
    }
    let response = await publicPostApi('/auth/login', data)
    return response
};

export const changePassword = async (newPassword) => {
    let response = await privatePostApi('/user/change-password', { newPassword: newPassword });
    return response;
}


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
    let response = await publicGetApi(`/user/confirm/${confirmationCode}`)
    return response;

}

export const forgotPassword = async (email) => {
    let response = await publicPostApi('/user/forgot-password', { email });
    return response;
}

export const verifyPassword = async (confirmationCode, newPassword) => {
    let response = await publicPostApi(`/user/verify-password/${confirmationCode}`, { newPassword });
    return response;
}