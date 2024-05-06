import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <nav className="flex justify-between">
        <div>
          <a href="#">
            <h1>
              Job <span>Connect</span>
            </h1>
          </a>
        </div>
        <div>
          <ul className="flex gap-4">
            <li>
              <a href="">HOME</a>
            </li>{" "}
            <li>
              <a href="">ABOUT US</a>
            </li>{" "}
            <li>
              <a href="">SERVICES</a>
            </li>{" "}
            <li>
              <a href="">CONTACT</a>
            </li>
          </ul>
        </div>
        <div>
          <a href="#">
            <button>Sign Up</button>
          </a>{" "}
          <a href="#">
            <button>Login</button>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
