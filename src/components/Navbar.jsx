import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { removeFromLocalStorage } from "../utils/localStorage";

const Navbar = () => {
  const { user, logout } = useAuth0();

  const handelClick = () => {
    removeFromLocalStorage();
    logout();
  };

  return (
    <Wrapper>
      <section>
        <div>m</div>
        <p>
          welcome, <span>{user.name}</span>
        </p>
        <Link to="/login" className="btn" onClick={handelClick}>
          logout
        </Link>
      </section>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.section`
  background-color: white;
  height: 4.5rem;
  display: grid;
  align-items: center;
  justify-content: center;
  section {
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    column-gap: 1.5rem;
    width: fit-content;
    text-transform: capitalize;
    div {
      background-color: #ae00ff;
      border-radius: 8px;
      color: white;
      display: grid;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 18px;
      height: 2.5rem;
      text-transform: capitalize;
      width: 2.5rem;
    }
    p span {
      font-weight: 700;
    }
    .btn {
      color: var(--black-shade-1);
      text-decoration: none;
      :hover {
        color: black;
      }
    }
  }
`;
