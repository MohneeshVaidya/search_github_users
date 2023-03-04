import {
  SET_LOADING,
  SET_NOT_LOADING,
  SET_FETCH,
  SET_NOT_FETCH,
  SET_ERROR,
  SET_NOT_ERROR,
  SET_CURRENT_SEARCH,
  SET_LIMIT_AND_REMAINING,
} from "../utils/actions";

const AppReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_FETCH: {
      return { ...state, isFetch: true };
    }

    case SET_NOT_FETCH: {
      return { ...state, isFetch: false };
    }

    case SET_LOADING: {
      return { ...state, isLoading: true };
    }

    case SET_NOT_LOADING: {
      return { ...state, isLoading: false };
    }

    case SET_ERROR: {
      return { ...state, isError: true };
    }

    case SET_NOT_ERROR: {
      return { ...state, isError: false };
    }

    case SET_CURRENT_SEARCH: {
      return { ...state, currentSearch: payload };
    }

    case SET_LIMIT_AND_REMAINING: {
      const { limit, remaining } = payload;

      return {
        ...state,
        limit,
        remaining,
      };
    }
  }
};

export default AppReducer;
