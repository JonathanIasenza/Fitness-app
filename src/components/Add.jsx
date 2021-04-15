/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./styles/Add.css"
import buttonImg from '../images/add.png'
import { Link } from 'react-router-dom'

const Add = () => (
    <div id="boton">
    <Link to="/exercise/new"><img id="boton-img" src={buttonImg}/></Link>
</div>
)

export default Add; 