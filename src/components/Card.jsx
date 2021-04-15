/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import circlesImg from "./../images/circles.png";
import "./styles/Card.css";
import emptyImg from "./../images/empty.png";
import { Link } from "react-router-dom";

const Card = ({title,description,textColor,img,leftColor,rightColor,link }) => (
  <div className="container-button">
    <Link to={link || <Link to="" />} className="ir-button">
      <div className="card mx-auto Fitness-Card" style={{color: `${textColor}`, 
      backgroundImage: `url(${circlesImg}), 
          linear-gradient(to right, ${ leftColor || "#00E0FF" }, ${rightColor || "#0E6CA5"}`,}}>
        {/* Estilos en línea para poder embeber variables, y cambiar diseño por componente */}
        <div className="card-body" style={{ color: `${textColor || "#000"}` }}>
          <div className="row center" style={{ color: `${textColor}` }}>
            <div className="col-6">
              <img src={img || emptyImg} className="float-right" />
            </div>
            <div
              className="col-6 Fitness-Card-Info" style={{ color: `${textColor}` }}>
              <h1 style={{ color: `${textColor}` }}> {title || "Título de prueba"} </h1>
              <p style={{ color: `${textColor}` }}>
                {description || "¡Comienza a editar tu tarjeta personalizada!"} </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default Card;
