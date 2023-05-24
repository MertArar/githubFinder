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
      <Link
        to="/"
        className="px-10 py-2 m-2 ml-10 font-semibold text-white bg-[#0059DF] rounded hover:opacity-80 "
      >
        Back
      </Link>
      <span className="font-bold text-gray-200">Hireable </span>:{" "}
      {hireable ? (
        <i className="text-green-500 fas fa-check" />
      ) : (
        <i className="text-red-600 fas fa-times-circle" />
      )}
      <div className="flex justify-center w-full h-full py-4 mx-auto">
        <div className="w-full max-w-md px-4 py-2 my-2 shadow-2xl rounded-2xl bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 lg:max-w-lg">
          <div className="flex justify-center">
            <img
              className="object-cover w-24 h-24 transition-opacity duration-500 ease-in border-2 border-sky-700 rounded-full cursor-pointer hover:opacity-90"
              src={avatar_url}
              alt=""
            />
          </div>
          <div>
            <div className="flex justify-center mt-4">
              <span className="text-xl font-medium text-[#CED2DB]">{name}</span>
            </div>
            <div className="flex justify-center m-1 font-bold text-gray-800 text-ml ">
              Location: <span className="text-gray-800"> {location}</span>
            </div>

            <p className="mt-2 font-semibold text-gray-800">
              <span className="font-bold text-gray-800 md:break-words sm:break-words">
                Bio{" "}
              </span>{" "}
              : {bio}
            </p>
          </div>
          <div className="max-w-md p-3 px-5 my-2 rounded-lg shadow-sm bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600">
            <button className="flex items-center px-3 py-2 mt-1 rounded-sm bg-[#0059DF] hover:animate-pulse">
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
              <p className="ml-1 text-xs leading-3 text-white dark:text-gray-100">
                <a href={html_url}>Visit Github Profile</a>
              </p>
            </button>
            <p className="mt-2 text-gray-800 ">
              <span className="font-bold text-gray-800">Username </span> :{" "}
              {login}
            </p>
            <p className="text-gray-800">
              <span className="font-bold text-gray-800 ">Company </span> :{" "}
              {company}
            </p>
            <p className="text-gray-800">
              <span className="font-bold text-gray-800 _blank">Website </span> :{" "}
              <a href={blog}>{blog}</a>
            </p>
          </div>
          <div className="max-w-md p-2 rounded-lg shadow-sm bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600">
            <div className="flex flex-wrap justify-between px-4 m-3 justify-items-center">
              <span className="inline-block px-4 py-1 text-sm font-semibold text-white bg-gray-800 rounded-full">
                Followers : {followers}
              </span>
              <span className="inline-block px-4 py-1 text-sm font-semibold text-white bg-gray-800 rounded-full">
                Following : {following}
              </span>

              <span className="inline-block px-4 py-1 text-sm font-semibold text-white bg-gray-800 rounded-full">
                Repos : {public_repos}
              </span>
              <span className="inline-block px-4 py-1 mt-2 text-sm font-semibold text-white bg-gray-800 rounded-full">
                Gists : {public_gists}
              </span>
            </div>
          </div>
          <span className="font-bold text-gray-800 md:break-words sm:break-words mt-5 ">
            Latest Repository :
          </span>{" "}
          <div className="flex flex-wrap max-w-md p-3 px-5 mr-3  rounded-xl shadow-sm justify-evenly bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600">
            <Repos repos={repos} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default User;
