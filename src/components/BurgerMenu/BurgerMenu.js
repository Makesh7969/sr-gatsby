import React from "react";
import "./BurgerMenu.scss";
import { Offcanvas } from "react-bootstrap";
import { graphql, Link, useStaticQuery } from "gatsby";
import useCompanyData from "../../dataProvider/useCompanyData";

const BurgerMenu = ({ showModal, setShowModal }) => {
  const { Phone, Email, Address } = useCompanyData();

  return (
    <Offcanvas
      className='burger-menu-wrap'
      placement='top'
      show={showModal}
      onHide={() => setShowModal(false)}>
      <Offcanvas.Body className='burger-menu-section'>
        <div className='burger-header'>
          <img
            src={''}
            alt='close icon'
            onClick={() => setShowModal(false)}
          />
        </div>
        <div className='burger-body'>
          <div className='left-section'>
            <Link to='/' className='burger-item'>
              Home
            </Link>
            <Link to='/' className='burger-item'>
              Sign Boards
            </Link>
            <Link to='/' className='burger-item'>
              Roadshows
            </Link>
            <Link to='/' className='burger-item'>
              About
            </Link>
            <Link to='/' className='burger-item'>
              Contact
            </Link>
          </div>
          <div className='right-section'>
            <h4 className='title'>contact us</h4>
            <div className='footer-info'>
              <a className='phone' href={`tel:${Phone}`}>
                {Phone}
              </a>
              <a className='email' href={`mailto:${Email}`}>
                {Email}
              </a>
              <p className='address'>{Address}</p>
            </div>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default BurgerMenu;
