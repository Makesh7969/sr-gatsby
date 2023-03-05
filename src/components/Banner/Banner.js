import { Link } from "gatsby";
import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.scss";

const Banner = () => {
  return (
    <section className='banner-wrapper'>
      <img src='https://sr-strapi-krnn.onrender.com/uploads/large_bg_image_980ce37c6c.jpg?updated_at=2023-03-05T14:21:52.493Z' />
      <Container className='banner-container'>
        <h1>Find Your Best Roadshows</h1>

        <Link to='/roadshows' className='button button-black'>
          Go To Roadshows
        </Link>
      </Container>
    </section>
  );
};

export default Banner;
