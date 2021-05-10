import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";

const ProductCarousel = () => {
  return (
    <Carousel pause="hover" className="bg-light landing">
      <Carousel.Item>
        <Link>
          <Image src="./images/chicken2.jpg" fluid className="d-block w-100"></Image>
          <Carousel.Caption className="carousel.caption">
            <h1>LiveStock Solutions</h1>
            <p>High-performing products that keep large turf areas beautiful and healthy-while saving you time, water and energy.</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link>
          <Image src="./images/expert2.jpg" fluid className="d-block w-100"></Image>
          <Carousel.Caption className="carousel.caption">
            <h1>Farming Solutions</h1>
            <p>High-performing products that keep large turf areas beautiful and healthy-while saving you time, water and energy.</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarousel;
