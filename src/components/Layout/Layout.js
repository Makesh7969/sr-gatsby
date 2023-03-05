import clsx from "clsx";
import React from "react";
import Footer from "../Footer/Footer";
import "./Layout.scss";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div className={clsx("layout-wrapper")}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
