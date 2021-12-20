import {Endpoints} from "../../api/apiConst";
import { api } from "../../api/apiHelper";

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";

// fetch products
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await api.get(Endpoints.PRODUCTS);
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: response.data
      });
    } finally {}
  };
};
