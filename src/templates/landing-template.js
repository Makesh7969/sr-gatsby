import { Link } from "gatsby";
import React from "react";
import "../styles/general/_global.scss";

const LandingTemplate = () => {
  return (
    <div>
      <h1>LandingPage</h1>

      <Link to='/' className='button button-black'>
        Back to Home
      </Link>
    </div>
  );
};

export default LandingTemplate;
