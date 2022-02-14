import { privatePostApi, publicPostApi } from '../apis/API';

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