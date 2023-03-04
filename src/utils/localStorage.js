export const addToLocalStorage = (data) => {
  localStorage.setItem("data", JSON.stringify(data));
};

export const getFromLocalStorage = () => {
  const data = localStorage.getItem("data");
  return data
    ? JSON.parse(data)
    : { githubUser: null, followers: [], repos: [] };
};

export const removeFromLocalStorage = () => {
  localStorage.removeItem("data");
};
