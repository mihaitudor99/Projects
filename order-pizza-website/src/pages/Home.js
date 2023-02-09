import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import pizza from "../assets/pizza.jpeg";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${pizza})` }}>
      <div className="headerContainer">
        <h1> Misu's Pizzeria </h1>
        <p> SUPER DELICIOUS PIZZA </p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}
