import React from "react";
import styled from "styled-components";
import Followers from "./Followers";
import Info from "./Info";

const InfoContainer = () => {
  return (
    <Wrapper>
      <Info />
      <Followers />
    </Wrapper>
  );
};

export default InfoContainer;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5rem;
  margin: 3rem auto 2rem;
  width: 95%;
  max-width: 970px;
  @media screen and (max-width: 831px) {
    grid-template-columns: 1fr;
    row-gap: 2.5rem;
  }
`;
