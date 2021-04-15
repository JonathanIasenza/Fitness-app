/* eslint-disable eqeqeq */
import React from "react";
import './styles/Welcome.css';
import './styles/Body.css';

var username=prompt("Introduce tu nombre porfavor: ");

if(username==="" || !isNaN(username) || username.length>10){
    do{
        username = prompt("Introduce un nombre válido: \n(máximo 10 carácteres y no se permiten números)")
    }while(username=="" || !isNaN(username) || username.length>10)
}

const Welcome = () => (
  <div className="container">
    <div className="Fitness-User-Info">
    <h1>¡Hola {username}!</h1>
    <p>Vamos a ejercitar un poco los músculos, elige la opción qué desees.</p>
    </div>
  </div>
)

export default Welcome;