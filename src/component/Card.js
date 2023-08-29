import React from "react";
import { Sukha } from "../data/Sukhadata";
// import image from "../assest/menu-2.png";
function Card() {
  return (
    <div style={{ backgroundColor: "#cab3f2" }}>
      <main className="container mx-auto py-36 px-8 w-1/1">
        <h1 className="text-center " style={{ fontSize: "40px" }}>
          Sukha / Fry /Kheema
        </h1>
        <div className="grid lg:grid-cols-2 gap-6">
          {Sukha.map((card) => (
            <div className="shadow-lg rounded-lg">
              <img className="rounded-t-lg" src={card.img} alt="" />
              <h1>{card.title}</h1>
              <h2>
                {card.quantityh}:-
                {card.priceH}
              </h2>
              <h2>
                {card.quantityF}:-
                {card.priceF}
              </h2>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}


export default Card;


