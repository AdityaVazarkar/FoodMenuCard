import React from "react";
import Base from "../component/Base";
import Card from "../component/Card";
import Card2 from "../component/Card2";
import Card3 from "../component/Card3";
import Card4 from "../component/Card4";
import Footer from "../component/Footer";

const Menu = () => {
  return (
    <Base>
      <div>
        <Card />
        <Card2 />
        <Card3 />
        <Card4 />
        <Footer />
      </div>
    </Base>
  );
};

export default Menu;
