import React from "react";
import styled from "styled-components";
import login from "../assets/images/login.jpg";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper>
      <img src={login} alt="login" />
      <button type="button" onClick={loginWithRedirect}>
        register/login
      </button>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.section`
  height: 100%;
  overflow: hidden;
  img {
    height: 100%;
    object-fit: cover;
    opacity: 0.3;
    width: 100%;
  }
  button {
    background-color: transparent;
    border: 1px solid chocolate;
    border-radius: 10px;
    color: chocolate;
    font-size: 1.5rem;
    letter-spacing: 1px;
    padding: 0.1rem 0.8rem 0.5rem;
    position: absolute;
    left: 5rem;
    top: 5rem;
    text-transform: capitalize;
    :hover {
      background-color: #d2691e7b;
      color: white;
      cursor: grab;
    }
  }
`;
