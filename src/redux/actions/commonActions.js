import {Endpoints} from "../../api/apiConst";
import { api } from "../../api/apiHelper";

export const FETCH_TAGS = "FETCH_TGAS";
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const SEARCH_STRING = "SEARCH_STRING";

// fetch products
export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const response = await api.get(`${Endpoints.CATEGORY}/all`);
      const categories = response.data.data.map(category => category.name);
      dispatch({
        type: FETCH_CATEGORIES,
        payload: categories
      });
    } finally {}
  };
};

// fetch reviews
export const fetchTags = (id) => {
  return async (dispatch) => {
    try {
      const response = await api.get(`${Endpoints.TAG}/all`);
      const tags = response.data.data.map(tag => tag.name);
      dispatch({
        type: FETCH_TAGS,
        payload: tags
      });
    } finally {}
  };
};

// fetch reviews
export const search = (searchString) => {
  return async (dispatch) => {
    dispatch({
      type: SEARCH_STRING,
      payload: searchString
    });
  };
};