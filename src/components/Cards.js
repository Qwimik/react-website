import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="card-img1"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="card-img2"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="card-img3"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="card-img4"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Advanture"
              path="/services"
            />
            <CardItem
              src="card-img5"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/signup"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
