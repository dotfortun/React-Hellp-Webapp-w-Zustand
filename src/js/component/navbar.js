import React from "react";
import { Link } from "react-router-dom";

import Debug from "./debug";
import useStore from "../store/zustand";

export const Navbar = () => {
  const store = useStore();

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">React Boilerplate</span>
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-primary">
            Check the Context in action
          </button>
        </Link>
      </div>
    </nav>
  );
};
