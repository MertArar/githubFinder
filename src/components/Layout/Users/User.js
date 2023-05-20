import React, { useEffect, useContext, Fragment } from "react";
import Spinner from "../Spinner";
import { Link, useParams } from "react-router-dom";
import Repos from "../../Repos/Repos";
import GithubContext from "../../../Context/Github/githubContext";

const User = () => {
  const githubContext = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
    getUserRepos(params.login);
    // eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   // getUser(match.params.login)
  //   // getUserRepos(match.params.login)
  //   console.warn('HELLO____', match.params?.login)
  //   // eslint-disable-next-line
  // }, [])

  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    company,
    hireable,
  } = user;

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to="/">Back</Link>
      <span>Hireable </span>:{" "}
      {hireable ? (
        <i className="text-green-500 fas fa-check" />
      ) : (
        <i className="text-red-600 fas fa-times-circle" />
      )}
      <div>
        <div>
          <div>
            <img src={avatar_url} alt="" />
          </div>
          <div>
            <div>
              <span>{name}</span>
            </div>
            <div>
              Location : <span> {location}</span>
            </div>

            <p>
              <span>Bio </span> : {bio}
            </p>
          </div>
          <div>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle
                  cx="4.5"
                  cy="3.5"
                  r={2}
                  stroke="white"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.5 10.5V9.5C1.5 8.39543 2.39543 7.5 3.5 7.5H5.5C6.60457 7.5 7.5 8.39543 7.5 9.5V10.5"
                  stroke="white"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 5.125C7.79289 5.125 7.625 5.29289 7.625 5.5C7.625 5.70711 7.79289 5.875 8 5.875V5.125ZM11 5.875C11.2071 5.875 11.375 5.70711 11.375 5.5C11.375 5.29289 11.2071 5.125 11 5.125V5.875ZM9.875 4C9.875 3.79289 9.70711 3.625 9.5 3.625C9.29289 3.625 9.125 3.79289 9.125 4H9.875ZM9.125 7C9.125 7.20711 9.29289 7.375 9.5 7.375C9.70711 7.375 9.875 7.20711 9.875 7H9.125ZM8 5.875H11V5.125H8V5.875ZM9.125 4V7H9.875V4H9.125Z"
                  fill="white"
                />
              </svg>
              <p>
                <a href={html_url}>Visit Github Profile</a>
              </p>
            </button>
            <p>
              <span>Username </span> : {login}
            </p>
            <p>
              <span>Company </span> : {company}
            </p>
            <p>
              <span>Website </span> : <a href={blog}>{blog}</a>
            </p>
          </div>
          <div>
            <div>
              <span>Followers : {followers}</span>
              <span>Following : {following}</span>

              <span>Repos : {public_repos}</span>
              <span>Gists : {public_gists}</span>
            </div>
          </div>
          <span>Latest Repository :</span>{" "}
          <div>
            <Repos repos={repos} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default User;
