import axiosInstance from "../axios-instance";
import { ENDPOINT } from "../endpoint";

export const authService = {
  login: async (body: any) => {
    const response = await axiosInstance.post(ENDPOINT.LOGIN, body);
    return response.data;
  },
};