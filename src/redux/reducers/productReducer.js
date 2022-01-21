import { FETCH_PRODUCTS_SUCCESS, FETCH_REVIEW, FETCH_QUESTION } from "../actions/productActions";

const initState = {
  products: [],
  review: null,
  question: null,
};

const productReducer = (state = initState, action) => {
  if (action.type === FETCH_PRODUCTS_SUCCESS) {
    return {
      ...state,
      products: action.payload
    };
  }

  if (action.type === FETCH_REVIEW) {
    return {
      ...state,
      review: action.payload
    };
  }

  if (action.type === FETCH_QUESTION) {
    return {
      ...state,
      question: action.payload
    };
  }

  return state;
};

export default productReducer;
