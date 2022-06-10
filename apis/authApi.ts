import axios from 'axios';
import { LoginInterface, SettingsUserInterface } from '../interfaces';
import { api } from './api';
import Cookies from 'js-cookie';

const userApi = axios.create({
  baseURL: `${api.baseUrl}${api.user}`,
});



const tokenApi = axios.create({
  baseURL: `${api.baseUrl}${api.token}`,
});

export const loginApi = async (userData: SettingsUserInterface) => {
  console.log(userData);
  try {
    const response = await userApi.post(`/login`, userData);
    const { data } = response;
    return data;
  } catch (error: any) {
    return {
      error: true,
    };
  }
};


const  getError =  ( error:any ) => {
  const {response} = error;
  const {data} = response;
  const {errors} = data;
  const {errors:errores} = errors;
  console.log(errores);
  const {errors:arrayErrores} = errores;
  console.log(arrayErrores);

}


export const updateApi = async (userData: SettingsUserInterface,id: string ) => {
const cookie = Cookies.get('x_token') ?? '';

console.log(userData);

  try {
    const response = await userApi.put(`/${id}`, userData,{
      headers:{
        'x_token': cookie,

      }
    });
  
    const { data } = response;
    return data;
  } catch (error: any) {
    getError(error);
    return {
      error: error,
    };
  }
};

export const revalidateToken = async () => {
  const x_token = Cookies.get('x_token') ?? null;
  const response = await tokenApi.post('/revalidate', { x_token });
  const { data } = response;
  return data;
};

export const registerApi = async (userData: LoginInterface) => {
  try {
    await userApi.post(`/register`, userData);
    return {
      error: false,
    };
  } catch (error: any) {
   
    return {
      error: true,
    };
  }
};
