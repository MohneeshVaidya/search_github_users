import React from "react";
import styled from "styled-components";
import not__found from "../assets/images/not__found.jpg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <img src={not__found} alt="not found" />
      <Link to="/" className="link">
        back home
      </Link>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.section`
  height: 100%;
  padding: 2rem;
  img {
    border-radius: 3rem;
    display: block;
    margin: 0 auto;
    opacity: 0.7;
    width: 90%;
    max-width: 30rem;
  }
  .link {
    border: 1px solid #d1702b;
    border-radius: 8px;
    color: #d1702b;
    display: block;
    font-size: 1.8rem;
    margin: 3rem auto 1rem;
    padding: 0.1rem 0.8rem 0.5rem;
    text-decoration: none;
    text-transform: capitalize;
    width: fit-content;
    :hover {
      background-color: #d1702b;
      color: white;
      opacity: 0.7;
    }
  }
`;
