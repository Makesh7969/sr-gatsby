import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import useCompanyData from "../../dataProvider/useCompanyData";
import logo from "../../images/brand.png";
import mailIcon from "../../images/icons/icon-mail.svg";
import phoneIcon from "../../images/icons/icon-phone.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./Header.scss";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const { Phone, Email } = useCompanyData();
  return (
    <div className='header-wrapper'>
      <Container className='header'>
        <div className='header-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='header-nav'>
          <a className='nav-item' href={`mailto: ${Email}`}>
            <img src={mailIcon} alt='mail icon' />
            <span>Enquire</span>
          </a>
          <a className='nav-item' href={`tel: ${Phone}`}>
            <img src={phoneIcon} alt='phone icon' />
            <span>+91 {Phone}</span>
          </a>
          <a className='nav-item' onClick={() => setShowModal(true)}>
            <span>Menu</span>
          </a>
        </div>
      </Container>
      <BurgerMenu showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Header;
