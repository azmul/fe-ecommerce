import { FETCH_BLOGS } from "../actions/blogActions";

const initState = {
  blogs: []
};

const blogReducer = (state = initState, action) => {
  if (action.type === FETCH_BLOGS) {
    return {
      ...state,
      blogs: action.payload
    };
  }

  return state;
};

export default blogReducer;
