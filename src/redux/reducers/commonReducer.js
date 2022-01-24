import { FETCH_CATEGORIES, FETCH_TAGS } from "../actions/commonActions";

const initState = {
  tags: [],
  categories: [],
};

const commonReducer = (state = initState, action) => {
  if (action.type === FETCH_CATEGORIES) {
    return {
      ...state,
      categories: action.payload
    };
  }

  if (action.type === FETCH_TAGS) {
    console.log(action.payload);
    return {
      ...state,
      tags: action.payload
    };
  }

  return state;
};

export default commonReducer;
