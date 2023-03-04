import React from "react";
import styled from "styled-components";
import { Bar3D, Column3D, Doughnut2D, Pie3D } from "./Charts";
import { useGithubContext } from "../contexts/GithubProvider";
import { getChartData } from "../utils/utilities";

const ChartContainer = () => {
  const { repos } = useGithubContext();
  const arr = getChartData(repos);

  const freqs = arr.sort((a, b) => b.value - a.value).slice(0, 5);
  const mostPopular = freqs
    .sort((a, b) => b.stars - a.stars)
    .map((obj) => {
      return {
        label: obj.label,
        value: obj.stars,
      };
    });

  let { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    { stars: {}, forks: {} }
  );

  stars = Object.values(stars).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();

  return (
    <Wrapper>
      <div>
        <Pie3D data={freqs} />
      </div>
      <div>
        <Column3D data={stars} />
      </div>
      <div>
        <Doughnut2D data={mostPopular} />
      </div>
      <div>
        <Bar3D data={forks} />
      </div>
    </Wrapper>
  );
};

export default ChartContainer;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 42% calc(58% - 1.5rem);
  gap: 1rem 1.5rem;
  margin: 0 auto;
  width: 95%;
  max-width: 970px;

  @media screen and (max-width: 1020px) {
    grid-template-columns: 99%;
    justify-content: center;
  }
`;
