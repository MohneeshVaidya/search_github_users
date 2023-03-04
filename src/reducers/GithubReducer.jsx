import { SAVE_USER } from "../utils/actions";
import { addToLocalStorage } from "../utils/localStorage";

const GithubReducer = (state, { type, payload }) => {
  switch (type) {
    case SAVE_USER: {
      addToLocalStorage({
        githubUser: payload.githubUser,
        followers: payload.followers,
        repos: payload.repos,
      });

      return {
        githubUser: payload.githubUser,
        followers: payload.followers,
        repos: payload.repos,
      };
    }
  }

  return state;
};

export default GithubReducer;
