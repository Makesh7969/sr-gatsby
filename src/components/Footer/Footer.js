import React from "react";
import useCompanyData from "../../dataProvider/useCompanyData";
const Footer = () => {
  const { Phone, Email, Address } = useCompanyData();
  return <div>Footer</div>;
};

export default Footer;
