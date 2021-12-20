import {Endpoints} from "../../api/apiConst";
import { api } from "../../api/apiHelper";

export const FETCH_SLIDER = "FETCH_SLIDER";

export const getSliders = () => {
  return async (dispatch)  => {
    try {
        const response = await api.get(Endpoints.SLIDERS);
        dispatch({
          type: FETCH_SLIDER,
          payload: response.data
        });
      } finally {}
       
  };
};