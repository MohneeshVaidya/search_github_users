import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { RiGitRepositoryFill } from "react-icons/ri";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { GoGist } from "react-icons/go";
import { useGithubContext } from "../contexts/GithubProvider";

const CardContainer = () => {
  const { githubUser } = useGithubContext();

  const data = [
    {
      id: 1,
      icon: <RiGitRepositoryFill />,
      count: 0,
      label: "repos",
    },
    { id: 2, icon: <FiUsers />, count: 0, label: "followers" },
    { id: 3, icon: <FiUserPlus />, count: 0, label: "following" },
    { id: 4, icon: <GoGist />, count: 0, label: "gists" },
  ];

  if (githubUser) {
    const { public_repos, public_gists, followers, following } = githubUser;
    data[0].count = public_repos;
    data[1].count = followers;
    data[2].count = following;
    data[3].count = public_gists;
  }

  return (
    <Wrapper>
      {data.map((info) => {
        return <Card key={info.id} {...info} />;
      })}
    </Wrapper>
  );
};

export default CardContainer;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 0 auto 1.5rem;
  width: 95%;
  max-width: 970px;
`;
