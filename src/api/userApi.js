import { api } from "./apiHelper";
import { Endpoints } from "./apiConst";

/** Register User */
export const registerUser = async (
    params
  ) => {
    const url = `${Endpoints.USER}/register`;
    
    const resp = await api.post(url,  {
      ...params
    });
    return resp.data;
};

/** Login User */
export const loginUser = async (
  params
) => {
  const url = `${Endpoints.USER}/login`;
  
  const resp = await api.post(url,  {
    ...params
  });
  return resp.data;
};

/** Login User */
export const getUser = async (
  id
) => {
  const url = `${Endpoints.USER}/${id}`;
  
  const resp = await api.get(url);
  return resp.data;
};
