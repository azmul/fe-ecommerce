import {Endpoints} from "../../api/apiConst";
import { api } from "../../api/apiHelper";

export const SETTING = "SETTING";

export const getSetting = () => {
  return async (dispatch)  => {
    try {
        const response = await api.get(Endpoints.SETTING);
        dispatch({
          type: SETTING,
          payload: response.data
        });
      } finally {}
  };
};