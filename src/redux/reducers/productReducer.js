import { FETCH_HOME_PRODUCTS, FETCH_COLLECTIONS_PRODUCTS, FETCH_REVIEW, FETCH_QUESTION } from "../actions/productActions";

const initState = {
  homeProducts: [],
  products: [],
  review: null,
  question: null,
};

const productReducer = (state = initState, action) => {
  if (action.type === FETCH_HOME_PRODUCTS) {
    return {
      ...state,
      homeProducts: action.payload
    };
  }

  if (action.type === FETCH_COLLECTIONS_PRODUCTS) {
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
