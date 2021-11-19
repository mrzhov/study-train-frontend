import {apiRequest} from "./index";

export const login = async (values) => {
    const response = await apiRequest({
        url: '/auth/login',
        method: 'POST',
        data: values,
    });
    if (!response?.data)
        throw new Error('Не удалось войти в систему, проверьте правильность введенных данных.');
    return response.data;
};

export const register = async (values) => {
    const response = await apiRequest({
        url: '/auth/register',
        method: 'POST',
        data: values,
    });
    if (!response?.data)
        throw new Error('Не удалось зарегистрироваться, попробуйте позже.');
    return response.data;
};