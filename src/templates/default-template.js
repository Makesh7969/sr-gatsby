import { Link } from "gatsby";
import React from "react";
import "../styles/inc/_global.scss";

const DefaultTemplate = () => {
  return (
    <div>
      <h1>HomePage</h1>

      <Link to='/roadshows' className='button button-black'>
        Go To Roadshows
      </Link>
    </div>
  );
};

export default DefaultTemplate;
