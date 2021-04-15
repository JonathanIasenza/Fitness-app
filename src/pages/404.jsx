/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image404 from '../images/404.png';
import '../components/styles/Errors.css';

function NotFound(){
    return(
        <>
        <h1 id="page-not-found">Página no encontrada :(</h1>
        <img id="image-404" src={Image404}/>
        </>
    )
}

export default NotFound;