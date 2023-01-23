// Initial State
const initialState = {
  loading: false,
  error: "",
  posts: [],
  post: {},
};
// Actions Creators
// 1 Fetch Posts (request started, success, error)
// Request Started
const fetchPostsRequest = () => {
  return {
    type: "FETCH_POSTS_REQUEST",
  };
};

// Success
const fetchPostSuccess = () => {
  return {
    type: "FETCH_POSTS_SUCCESS",
  };
};

// 2 Fetch post (request started, success, error)
const fetchPostAction = () => {};
// Reducers
// Store
