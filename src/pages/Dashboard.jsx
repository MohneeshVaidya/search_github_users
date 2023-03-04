import React from "react";
import styled from "styled-components";
import {
  Navbar,
  SearchContainer,
  CardContainer,
  InfoContainer,
  ChartContainer,
} from "../components";
import { useAppContext } from "../contexts/AppProvider";

const Dashboard = () => {
  const { isLoading, isError } = useAppContext();

  return (
    <Wrapper>
      <Navbar />
      <SearchContainer />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>There is an error...</h1>
      ) : (
        <>
          <CardContainer />
          <InfoContainer />
          <ChartContainer />
        </>
      )}
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.section`
  height: 100%;
  h1 {
    text-align: center;
  }
`;
