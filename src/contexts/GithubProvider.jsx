import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import reducer from "../reducers/GithubReducer";
import { customFetch } from "../utils/axios";
import { SAVE_USER } from "../utils/actions";
import { getFromLocalStorage } from "../utils/localStorage";
import { useAppContext } from "./AppProvider";

const GithubContext = createContext();

const initialState = getFromLocalStorage();

const GithubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    isFetch,
    isError,
    currentSearch,
    setFetch,
    setNotFetch,
    setLoading,
    setNotLoading,
    setError,
    setNotError,
    setLimitAndRemaining,
  } = useAppContext();

  const fetchUserData = async (name) => {
    try {
      const resp = await customFetch.get(`/${name}`);
      const followersResp = await customFetch.get(`/${name}/followers`);
      const reposResp = await customFetch.get(`/${name}/repos?per_page=100`);
      setLimitAndRemaining();
      dispatch({
        type: SAVE_USER,
        payload: {
          githubUser: resp.data,
          followers: followersResp.data,
          repos: reposResp.data,
        },
      });
      setNotLoading();
    } catch (error) {
      setLimitAndRemaining();
      setNotLoading();
      setError();
      console.log(error.response);
    }
  };

  useEffect(() => {
    if (isFetch) {
      fetchUserData(currentSearch);
      setNotFetch();
    }
  }, [isFetch]);

  const fetchData = () => {
    setFetch();
    setLoading();
    if (isError) setNotError();
  };

  return (
    <GithubContext.Provider
      value={{
        ...state,
        fetchData,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;

export const useGithubContext = () => useContext(GithubContext);
