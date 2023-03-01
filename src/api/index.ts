import axios, { AxiosResponse } from 'axios';
import { BASE_URL, APP_TOKEN } from '@env';

interface TransactionParams {
    uuid: string;
    calculation: string;
    result: string | number;
}

const API = axios.create({
    baseURL: process.env.BASE_URL || BASE_URL,
    headers: {
        Authorization: process.env.APP_TOKEN || APP_TOKEN,
    },
});

export const addUser = (os: string): Promise<AxiosResponse> => API.post('/app/user', {
    os
});

export const getTransaction = (uuid: string): Promise<AxiosResponse> =>
    API.get(`/app/user/${uuid}/transaction`);

export const addTransaction = (
    params: TransactionParams
): Promise<AxiosResponse> =>
    API.post(`/app/user/${params.uuid}/transaction`, {
        calculation: params.calculation,
        result: params.result,
    });

export const deleteTransaction = (uuid: string): Promise<AxiosResponse> =>
    API.delete(`/app/user/${uuid}/transaction`);

export default API;
