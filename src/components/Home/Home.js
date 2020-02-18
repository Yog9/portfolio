import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Codewars from "../../assets/codewars.svg";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

const Home = () => {
  const defaultTheme = {
    background: "transparent"
  };
  return (
    <div className="mainDiv">
      <div className="inner-content">
        <p> Hey there, I'm</p> <h2> Yogita Verma </h2>{" "}
        <p> Front End Developer </p>{" "}
        <p className="primary">
          I'm a self-taught Developer, a life-long learner and a Software
          Engineer. If I'm not coding, I'll be binge-watching.
        </p>
        <p>
          If you have any queries, feel free to message me on{" "}
          <a
            href="https://twitter.com/YogitaVerma20"
            rel="noopener noreferrer"
            target="_blank"
          >
            twitter{" "}
          </a>
          or <Link to="/contact"> contact me </Link>.{" "}
        </p>
        <ul className="social-icons">
          <li>
            <a
              href="https://twitter.com/YogitaVerma20"
              target="_blank"
              rel="noopener noreferrer"
              title="Yogita Verma on Twitter"
              className="SocialIconsStyle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 50 50"
                version="1.1"
                width="20px"
                height="20px"
              >
                <path
                  fill="white"
                  d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z "
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Yog9"
              target="_blank"
              rel="noopener noreferrer"
              title="Yogita Verma on Github"
              className="SocialIconsStyle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 32 32"
                version="1.1"
                width="32px"
                height="32px"
              >
                <path
                  fill="white"
                  d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z "
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/yogita-verma1994/"
              target="_blank"
              rel="noopener noreferrer"
              title="Yogita Verma on linkedin"
              className="SocialIconsStyle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="30px"
                height="30px"
              >
                <path
                  fill="white"
                  d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.codewars.com/users/Yog9"
              target="_blank"
              rel="noopener noreferrer"
              title="Yogita Verma on Codewars"
              className="SocialIconsStyle"
            >
              <img src={Codewars} alt="" className="codewars" />
            </a>
          </li>
        </ul>
        <GitHubCalendar
          username="Yog9"
          years={[2020]}
          theme={defaultTheme}
          fullYear={false}
        >
          <ReactTooltip delayShow={50} html />
        </GitHubCalendar>
        <div className="footer"> Coded By Yogita Verma </div>
      </div>
    </div>
  );
};

export default Home;
