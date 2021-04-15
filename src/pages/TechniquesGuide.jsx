/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../components/styles/TechniquesGuide.css"
import { Table } from "react-bootstrap";
import { BiDownArrowCircle } from "react-icons/bi";
import Divider from '@material-ui/core/Divider';
import FooterPage from '../components/FooterPage'
import ArrowUp from '../components/ArrowUp'
import ArrowBack from '../components/ArrowBack'
import img1 from '../images/1.jpg'
import img01 from '../images/01.jpg'
import img02 from '../images/02.jpg'
import img03 from '../images/03.jpg'
import img04 from '../images/04.jpg'
import img05 from '../images/05.jpg'
import img06 from '../images/06.jpg'
import img07 from '../images/07.jpg'
import img08 from '../images/08.jpg'
import img09 from '../images/09.jpg'



class TechniquesGuide extends React.Component {
  render() {

    return (  
      <React.Fragment>
        <div className="container-page">
          <h1 id="guia">
            GUÍA PARA LA CORRECTA APLICACIÓN TÉCNICA DE EJERCICIOS
          </h1>
          <div className="container-parrafo">
            <p className="parrafo">
              <br />
              Autor:{" "}
              <b>Juan Manuel Cortell (Director del Gimnasio Acrópolis) </b>
              <br />
              <br />
              <ArrowBack/>
              <h4>Press banca horizontal con barra</h4>
              <img
                className="imgs"
                src={img1}
              />
              <br />
              <br />
              INVOLUCRACIÓN MUSCULAR:
              <br />
              Pectoral mayor, pectoral menor, fibras anteriores del deltoides y
              tríceps.
              <br />
              <br />
              MATERIAL:
              <br />
              Banco plano, colchoneta, barra y discos.
              <br />
              <br/>
              <Divider/>
              <br />
              <h3 className="title-table">TABLA DE INTENSIDADES</h3>
              <Table id="table" striped bordered hover variant="dark">
                <thead>
                  <tr id="first-tr">
                    <th>Número:</th>
                    <th>Intensidad:</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <th>Baja</th>
                  </tr>
                  <tr>
                    <th>2</th>
                    <th>Media</th>
                  </tr>
                  <tr>
                    <th>3</th>
                    <th>Moderada</th>
                  </tr>
                  <tr>
                    <th>4</th>
                    <th>Alta</th>
                  </tr>
                  <tr>
                    <th>5</th>
                    <th>Muy alta</th>
                  </tr>
                </tbody>
              </Table>
              <br />
              <Divider/>
              <br/>
                <h4>DESCRIPCIÓN DEL MOVIMIENTO <BiDownArrowCircle/></h4>
              <br />
              <p style={{ textAlign: "left" }}>
                Tendido supino con los brazos casi extendidos sujetar la barra
                con las manos en pronación y a una distancia ligeramente
                superior a la anchura de los hombros. Se procede a la flexión de
                codos para descender la barra hasta llegar a dos o tres dedos
                sobre la línea de la aureola del pecho. Sin descansar la barra
                en el pecho proceder a la extensión de los codos sin llegar a su
                bloqueo en la fase final.
              </p>
              <br />
              <Divider/>
              <br/>
                <h4>ASPECTOS TÉCNICOS A CONSIDERAR <BiDownArrowCircle/></h4>
              <br />
              <p style={{ textAlign: "left" }}>
                <ul>
                  <li>No se deben bloquear los codos en la fase final de la extensión.</li>

                  <li>En ocasiones se suele recomendar un agarre más ancho para
                incidir en mayor medida sobre la zona externa del pectoral o más
                cerrado para implicar más el tríceps y las porciones esternales
                del pectoral pero no mantener las muñecas alineadas y en
                progresión con el antebrazo durante el recorrido puede aumentar
                considerablemente el riesgo de lesión (neuritis cubital y/o
                síndrome del Túnel Carpiano). Existiendo además ejercicios que
                pueden incidir en éstas zonas preservando la integridad de la
                muñeca y minimizando la posibilidad de lesión.</li>

                <li>La zona lumbar debe quedar firmemente pegada al banco durante todo el
                recorrido. Para ello debemos realizar una flexión de cadera y
                rodillas. Si el banco no lo permite, debemos utilizar otros
                implementos como bancos, steps, etc. que nos faciliten adoptar
                dicha posición.</li>

                <li>La cabeza debe permanecer apoyada en el bando
                durante todo el recorrido. Al descender la carga en su fase
                final se deberá evitar apoyar o realizar rebotes sobre el pecho.</li>

                <li>Como medida profiláctica también podemos minimizar el riesgo de
                lesión en la articulación del hombro si reducimos el recorrido
                unos 5-10cm antes de llegar al pecho.</li>

                <li>Los hombros nunca deberán abducirse más de 80º ya que aumenta el riesgo de lesión en el
                hombro (conflicto anterosuperior).</li>

                <li>La respiración constará de una fase de inspiración en la fase excéntrica y otra de
                espiración en la concéntrica.</li>
                </ul>

                <Divider/>

              </p>{" "}
              
              <h4>1) Entrenamiento de fuerza</h4>
              <br/>
              <img className="imgs" 
              src={img01}></img>
              <br />
              <br/>
              AL REALIZAR ESTOS EJERCICIOS, DEBES: MANTENER LA ESPALDA
              PERFECTAMENTE ALINEADA CON EL RESTO DEL CUERPO A LO LARGO DE TODO
              EL RECORRIDO. EVITAR SOBRE TODO EXAGERAR LA CURVATURA LORDÓTICA DE LA ZONA.
              <br/>
              <br />
              <Divider/>
              <br/>
              <h4>2) Press Funcional con globo de ejercicio</h4>
              <br/>
              <img className="imgs" 
              src={img02}></img>
              <br/>
              <br/>
              <Divider/>
              <br/>
              <h4>3) Press banca horizontal con mancuernas, sin material en la que se
              utiliza la resistencia corporal</h4>
              <br />
              <img className="imgs"
              src={img03}></img>
              <br />
              <br/>
              <Divider/>
              <br/>
              <h4>4) Fondos en suelo en cuadrupedia</h4>
              <br/>
              <img className="imgs"
              src={img04}></img>
              <br/>
              <br/>
              <Divider/>
              <br/>
              <h4>5) Fondos en suelo con apoyo de manos y rodillas</h4>
              <br/>
              <img className="imgs"
              src={img05}></img>
              <br />
              <br/>
              <Divider/>
              <br/>
              <h4>6) Fondos en suelo con apoyo de brazos sobre plataforma elevada</h4>
              <br/>
              <img className="imgs"
              src={img06}></img>
              <br/>
              <br/>
              <Divider/>
              <br/>
              <h4>7) Fondos en suelo con apoyo de brazos</h4>
              <br/>
              <img className="imgs"
              src={img07}></img>
              <br/>
              <br/>
              <Divider/>
              <br/>
              <h4>8) Fondos en suelo con apoyo de pies sobre plataforma elevada</h4>
              <br />
              <img className="imgs"
              src={img08}></img>
              <br/>
              <br/>
              <Divider/>
              <br/>
              <h4>9) Fondos en suelo con tres apoyos pies y una mano concéntrica</h4>
              <br/>
              <img className="imgs"
              src={img09}></img>
              <br/>
              <br/>
              Se produce cuando los músculos se contraen y los puntos de
              inserción se aproximan, el vientre muscular se “concentra”. Se
              aprecia un acortamiento en la longitud del vientre muscular como
              consecuencia de vencer la resistencia.
              <br/>
              <br/>
              <Divider/>
              <br/>
            </p>
          </div>
        </div>
        <br/>
        <ArrowUp />
        <FooterPage/>
      </React.Fragment>
    );
  }
}

export default TechniquesGuide;
