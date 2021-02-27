import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../common/navbar";
import { Footer } from "../footer/footer";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Link to="/accounts">
          <button>Click here to Access your acount</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};
