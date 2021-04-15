/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import FatalErrorImg from '../images/500.png';
import '../components/styles/Errors.css';

function FatalError(){
    return(
        <>
        <h1 id="fatal-error">Error inesperado D: </h1>
        <img id="image-500" src={FatalErrorImg}/>
        </>
    )
}

export default FatalError;
