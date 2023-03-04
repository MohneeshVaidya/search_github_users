import { useEffect, useReducer, useContext, createContext } from "react";
import axios from "axios";
import reducer from "../reducers/AppReducer";
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

const AppContext = createContext();

const initialState = {
  isFetch: false,
  isLoading: false,
  isError: false,
  currentSearch: "",
  limit: 0,
  remaining: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    setLimitAndRemaining();
  }, []);

  const setLimitAndRemaining = async () => {
    try {
      const {
        data: {
          rate: { limit, remaining },
        },
      } = await axios.get("https://api.github.com/rate_limit");

      dispatch({
        type: SET_LIMIT_AND_REMAINING,
        payload: { limit, remaining },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setFetch = () => {
    dispatch({ type: SET_FETCH });
  };

  const setNotFetch = () => {
    dispatch({ type: SET_NOT_FETCH });
  };

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const setNotLoading = () => {
    dispatch({ type: SET_NOT_LOADING });
  };

  const setError = () => {
    dispatch({ type: SET_ERROR });
  };

  const setNotError = () => {
    dispatch({ type: SET_NOT_ERROR });
  };

  const setCurrentSearch = (value) => {
    dispatch({ type: SET_CURRENT_SEARCH, payload: value });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setLoading,
        setNotLoading,
        setFetch,
        setNotFetch,
        setError,
        setNotError,
        setCurrentSearch,
        setLimitAndRemaining,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => useContext(AppContext);
