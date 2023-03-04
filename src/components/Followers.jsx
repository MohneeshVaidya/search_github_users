import React from "react";
import styled from "styled-components";
import { useGithubContext } from "../contexts/GithubProvider";

const Followers = () => {
  const { followers } = useGithubContext();

  return (
    <Wrapper>
      <div className="title">Followers</div>
      <section className="container">
        {followers.map(({ id, login, avatar_url, html_url }) => {
          return (
            <section key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>@{login}</h4>
                <a href={html_url} target="_blank">
                  {html_url}
                </a>
              </div>
            </section>
          );
        })}
      </section>
    </Wrapper>
  );
};

export default Followers;

const Wrapper = styled.section`
  background-color: white;
  position: relative;
  .title {
    background-color: white;
    color: #0000008d;
    font-weight: 500;
    padding: 0.2rem 0.6rem;
    position: absolute;
    left: 0;
    top: -1.55rem;
    text-align: center;
    width: fit-content;
  }
  .container {
    border-radius: 6px;
    border-top-left-radius: 0;
    height: 242px;
    overflow: scroll;
    padding: 1rem 1.5rem;
    section {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 1.5rem;
      align-items: center;
      font-size: 15px;
      margin-bottom: 1.5rem;
      img {
        border-radius: 50%;
        height: 3rem;
        object-fit: cover;
        width: 3rem;
      }
      a {
        color: #00000063;
        font-size: 14px;
        font-weight: 700;
        text-decoration: none;
      }
    }
  }
`;
