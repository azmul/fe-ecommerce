import { api } from "./apiHelper";
import { Endpoints } from "./apiConst";

/** Send Message */
export const sendMessage = async (
    params
  ) => {
    const url = Endpoints.MESSAGES;
    
    const resp = await api.post(url,  {
      ...params
    });
    return resp.data;
};
