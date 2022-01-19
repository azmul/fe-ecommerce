import {Endpoints} from "../../api/apiConst";
import { api } from "../../api/apiHelper";

export const FETCH_BLOGS = "FETCH_BLOGS";

export const getBlogs = (params) => {
  return async (dispatch)  => {
    try {
        const response = await api.get(Endpoints.BLOG, {params: {...params}});
        dispatch({
          type: FETCH_BLOGS,
          payload: response.data
        });
      } finally {}
       
  };
};