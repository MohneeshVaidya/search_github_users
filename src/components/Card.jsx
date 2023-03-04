import React from "react";
import styled from "styled-components";

const Card = ({ icon, count, label }) => {
  return (
    <Wrapper>
      <div className={`icon ${label}`}>{icon}</div>
      <div className="info">
        <h1>{count}</h1>
        <span>{label}</span>
      </div>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.section`
  background-color: white;
  border-radius: 6px;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;

  height: 5rem;
  padding-left: 2rem;
  .icon {
    border-radius: 50%;
    display: grid;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    height: 2.5rem;
    width: 2.5rem;
  }
  .repos {
    background-color: #f5d1d3;
    color: #cf5f5f;
  }
  .followers {
    background-color: #dbf8fa;
    color: #5eb7bd;
  }
  .following {
    background-color: #e0e2fb;
    color: #1f2688;
  }
  .gists {
    background-color: #f1eab0;
    color: #dfa723;
  }
  .info {
    h1 {
      color: black;
      font-size: 20px;
      text-align: left;
    }
    span {
      color: var(--black-shade-1);
      font-size: 14px;
      font-weight: 600;
      text-transform: capitalize;
    }
  }
`;
