import React from "react";
import styled from "styled-components";
import { SlMagnifier } from "react-icons/sl";
import { useAppContext } from "../contexts/AppProvider";
import { useGithubContext } from "../contexts/GithubProvider";

const SearchContainer = () => {
  const { isLoading, currentSearch, setCurrentSearch, limit, remaining } =
    useAppContext();
  const { fetchData } = useGithubContext();

  const handelSubmit = (e) => {
    e.preventDefault();

    fetchData();
  };

  const handelChange = (e) => {
    setCurrentSearch(e.target.value);
  };

  return (
    <Wrapper>
      <form onSubmit={handelSubmit}>
        <SlMagnifier />
        <input
          type="text"
          name="user"
          value={currentSearch}
          placeholder="Enter Github User"
          onChange={handelChange}
        />
        <button type="submit" disabled={isLoading}>
          search
        </button>
      </form>
      <div>
        requests : {remaining} / {limit}
      </div>
    </Wrapper>
  );
};

export default SearchContainer;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 68% auto;
  margin: 3.5rem auto 1.5rem;
  width: 95%;
  max-width: 970px;

  @media screen and (max-width: 729px) {
    grid-template-columns: 90%;
    justify-content: center;
    row-gap: 0.5rem;
  }

  form {
    background-color: white;
    border-radius: 6px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 0.3rem;
    font-size: 13px;
    padding: 0.3rem;
    padding-left: 0.5rem;
    input {
      border: none;
      border-radius: 4px;
      font-size: 18px;
      height: 1.8rem;
      padding-left: 8px;
    }
    button {
      background-color: #ae00ff;
      border-radius: 4px;
      color: white;
      border: none;
      height: 1.8rem;
      padding: 0 0.6rem;
      font-size: 17px;
      font-weight: 400;
      letter-spacing: 2px;
      text-transform: capitalize;
      :hover {
        opacity: 0.7;
        cursor: grab;
      }
    }
  }
  div {
    color: #0000007a;
    display: grid;
    align-items: center;
    justify-content: end;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: capitalize;
  }
`;
