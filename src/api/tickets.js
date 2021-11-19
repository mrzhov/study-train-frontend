import {apiRequest} from "./index";

export const getCities = async () => {
    const response = await apiRequest({
        url: '/tickets/getCities',
        method: 'GET',
    });
    if (!response?.data)
        throw new Error('Не удалось получить список городов, попробуйте позже.');
    return response.data;
};

export const buyTicket = async ({ id, data }) => {
    const response = await apiRequest({
        url: `/users/${id}/buyTicket`,
        method: 'POST',
        data
    });
    if (!response?.data)
        throw new Error('Не удалось купить билет, попробуйте позже.');
    return response.data;
};