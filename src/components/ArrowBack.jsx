import React from 'react'
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import './styles/ArrowBack.css'
import { Link } from 'react-router-dom'

class ArrowBack extends React.Component{
    render(){
        return(
    <React.Fragment>
          <div id="back-container" >
        <div className="back">
          <Link id="arrow-back" to="/exercise">
            <FaArrowAltCircleLeft />
          </Link>
        </div>
        </div>
    </React.Fragment>
        )
    }
}

export default ArrowBack;