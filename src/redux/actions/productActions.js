import {Endpoints} from "../../api/apiConst";
import { api } from "../../api/apiHelper";

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_REVIEW = "FETCH_REVIEW";
export const FETCH_QUESTION = "FETCH_QUESTION";

// fetch products
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await api.get(Endpoints.PRODUCTS);
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: response.data.data
      });
    } finally {}
  };
};

// fetch reviews
export const fetchReview = (id) => {
  return async (dispatch) => {
    try {
      const response = await api.get(`${Endpoints.REVIEW}/product/${id}`);
      dispatch({
        type: FETCH_REVIEW,
        payload: response.data
      });
    } finally {}
  };
};

// fetch reviews
export const fetchQuestion = (id) => {
  return async (dispatch) => {
    try {
      const response = await api.get(`${Endpoints.QUESTION}/product/${id}`);
      dispatch({
        type: FETCH_QUESTION,
        payload: response.data
      });
    } finally {}
  };
};
