import { Link } from "gatsby";
import React from "react";
import Banner from "../components/Banner/Banner";
import Layout from "../components/Layout/Layout";
import "../styles/general/_global.scss";

const DefaultTemplate = () => {
  return (
    <div>
      <Layout>
        <Banner />
        <h1>HomePage</h1>
      </Layout>
    </div>
  );
};

export default DefaultTemplate;
