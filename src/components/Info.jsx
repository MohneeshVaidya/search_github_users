import React from "react";
import styled from "styled-components";
import { CgWebsite } from "react-icons/cg";
import { MdLocationOn } from "react-icons/md";
import { FiLink } from "react-icons/fi";
import { useGithubContext } from "../contexts/GithubProvider";

const Info = () => {
  const { githubUser } = useGithubContext();

  const img = githubUser?.avatar_url || null;
  const name = githubUser?.name || "user name";
  const login = githubUser?.login || "user_login";
  const bio = githubUser?.bio || "user bio";
  const company = githubUser?.company || "user company";
  const location = githubUser?.location || "user location";
  const website = githubUser?.blog || "user blog link";

  const data = [
    { id: 1, icon: <CgWebsite />, text: company },
    { id: 2, icon: <MdLocationOn />, text: location },
    {
      id: 3,
      icon: <FiLink />,
      text: website,
      isLink: true,
    },
  ];

  return (
    <Wrapper>
      <div className="title">User</div>
      <article className="head">
        <section>
          <img src={img} alt="user image" />
          <div>
            <h4>{name}</h4>
            <span>@{login}</span>
          </div>
        </section>
        <a href={githubUser?.html_url} className="btn">
          Follow
        </a>
      </article>
      <article className="body">
        <h4>{bio}</h4>
        {data.map(({ id, icon, text, isLink }) => {
          if (isLink)
            return (
              <div key={id}>
                <span className="icon">{icon}</span>{" "}
                <a href={text} target="_blank">
                  {text}
                </a>
              </div>
            );
          return (
            <div key={id}>
              <span className="icon">{icon}</span> <span>{text}</span>
            </div>
          );
        })}
      </article>
    </Wrapper>
  );
};

export default Info;

const Wrapper = styled.section`
  background-color: white;
  border-radius: 6px;
  border-top-left-radius: 0;
  padding: 1rem 1.5rem;
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
  .head {
    display: grid;
    grid-template-columns: 0.6fr 0.4fr;
    align-items: center;
    justify-content: start;
    section {
      display: grid;
      grid-template-columns: auto auto;
      align-items: center;
      justify-content: left;
      column-gap: 1rem;
      img {
        border-radius: 50%;
        height: 3.8rem;
        object-fit: cover;
        width: 3.8rem;
      }
      span {
        color: var(--black-shade-1);
        font-size: 15px;
      }
    }
    .btn {
      background-color: transparent;
      border: 2px solid #ae00ff;
      border-radius: 0.7rem;
      color: #ae00ff;
      font-size: 16px;
      font-weight: 600;
      grid-column: 3;
      letter-spacing: 1px;
      padding: 0.1rem 1rem 0.2rem;
      text-decoration: none;
      transition: all 400ms;
      :hover {
        background-color: #ae00ff6a;
        border-color: #ae00ff13;
        color: white;
        cursor: grab;
      }
    }
  }
  .body {
    margin: 0.8rem 0;
    h4 {
      color: #00000094;
      margin-bottom: 0.8rem;
    }
    div {
      margin: 0.5rem 0;
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 0.8rem;
      text-transform: capitalize;
    }
    .icon {
      font-size: 1.2rem;
      color: var(--black-shade-1);
    }
    a {
      color: #129acf;
      text-decoration: none;
      text-transform: none;
    }
  }
`;
