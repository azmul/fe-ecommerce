import {Endpoints} from "../../api/apiConst";
import { api } from "../../api/apiHelper";

export const FETCH_HOME_PRODUCTS = "FETCH_HOME_PRODUCTS";
export const FETCH_COLLECTIONS_PRODUCTS = "FETCH_COLLECTIONS_PRODUCTS";
export const FETCH_REVIEW = "FETCH_REVIEW";
export const FETCH_QUESTION = "FETCH_QUESTION";

// fetch products
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await api.get(`${Endpoints.PRODUCTS}/home`);
      dispatch({
        type: FETCH_HOME_PRODUCTS,
        payload: response.data.data
      });
    } finally {}
  };
};

// fetch all collections products
export const fetchCollectionsProducts = () => {
  return async (dispatch) => {
    try {
      const response = await api.get(`${Endpoints.PRODUCTS}/collection`);
      dispatch({
        type: FETCH_COLLECTIONS_PRODUCTS,
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
