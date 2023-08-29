import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../css/Carsol.css";
import { dataDigitalBestSeller } from "../data/Carsoldata";
import { Link, useNavigate } from "react-router-dom";

// import imgGirl from "../assets/defaultImage.jpg";

function Carsol() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
    }));
  };
  const navigat = useNavigate();

  const handlemenu = () => {
    navigat(`/menu`);
  };

  return (
    <div className="App">
      <div style={{ textAlign: "center", color: "", fontSize: "50px" }}>
        <h1>Menu</h1>
      </div>

      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div>
            <div className="card">
              <div className="card-top">
                <img
                  src={
                    defaultImage[item.title] === item.title
                      ? defaultImage.linkDefault
                      : item.linkImg
                  }
                  alt={item.title}
                  onError={handleErrorImage}
                />
                <h1>{item.title}</h1>
              </div>
              <div className="card-bottom">
                <h2>{item.info}</h2>
              </div>
              <div className="card-bottom">
                <h3>{item.nam1}</h3>
                <h3>{item.nam2}</h3>
              </div>
            </div>
            <br></br>
            <div style={{ justifyContent: "center" }}>
              <button className="button" onClick={handlemenu}>
                Menu
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carsol;
