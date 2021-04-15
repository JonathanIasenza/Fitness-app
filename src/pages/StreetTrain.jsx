/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { BiDownArrowCircle } from "react-icons/bi";
import Divider from "@material-ui/core/Divider";
import FooterPage from "../components/FooterPage";
import ArrowUp from "../components/ArrowUp";
import ArrowBack from "../components/ArrowBack";
import "../components/styles/StreetTrain.css"

class StreetTrain extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-page">
          <h1 id="street-title">EJERCICIOS AL AIRE LIBRE</h1>
          <div className="container-parrafo" id="parrafo-street">
            <br />
            <p>
              Autora:{""}
              <b> Gabriela Gottau</b>
            </p>
            <ArrowBack />
            <h4>EJERCICIOS PARA TRABAJAR EL CUERPO EN EL PARQUE <BiDownArrowCircle/></h4>
            <br />
            <p>
              Si te encuentras lejos del gimnasio o si has decidido aprovechar
              el buen tiempo para entrenar al aire libe, te ayudamos a armar una
              completa rutina con ejercicios para trabajar todo el cuerpo en el
              parque, usando mobiliario urbano y disfrutando de la naturaleza.
              Entrenar en el parque puede resultar muy placentero por estar al
              aire libre, pero además, es una alternativa económica y no menos
              efectiva que el gimnasio para estar en forma. Sólo es importante
              saber cómo podemos trabajar todo el cuerpo en un parque.
            </p>
            <br />
            <img
              className="imgs"
              id="img"
              src="https://i.blogs.es/f6fa56/parque1/1366_2000.jpg"
            ></img>
            <br />
            <br />
            <Divider />
            <br />
            <h4>EJERCICIOS AERÓBICOS EN EL PARQUE <BiDownArrowCircle /></h4>
            <br/>
            <p>
              Si tu objetivo es quemar calorías y ganar resistencia, sin duda
              los ejercicios aeróbicos no pueden faltar en tu entrenamiento. Y
              en medio de un parque, al aire libre, las opciones para elevar la
              frecuencia cardíaca y quemar grasas son:
              <p style={{ textAlign: "left" }}>
                <ul>
                  <li>
                    <b>Carrera continua en llano</b> por una senda o calle que
                    rodea al parque. Lo mejor es comenzar caminando hasta lograr
                    una buena temperatura corporal y después, correr a ritmo
                    constante por 15 a 30 minutos.
                  </li>
                  <li>
                    <b>Subida y bajada de escaleras</b> para quemar calorías
                    mientras trabajas todos los músculos del tren inferior.
                    Puedes subir escalones simples o de dos en dos, y también
                    puedes subir dando saltos con un pie o con ambos juntos si
                    eres más exigente.
                  </li>
                  <li>
                    <b>Carrera en cuestas</b> subir y bajar cuestas naturales
                    del parque puede ser un gran desafío para tu cuerpo e
                    implica un esfuerzo adicional para los músculos de tus
                    piernas, por ello, puedes subir a velocidad moderada una
                    cuesta y bajar más lento tantas cuestas como desees.
                  </li>
                  <li>
                    <b>Saltos sobre bancos</b> con ambos pies juntos puedes
                    saltar sobre un escalón o banco tantas veces como te sea
                    posible. Verás que no sólo tus músculos se exigen
                    notablemente, sino también, tus pulsaciones se elevan y
                    podrás quemar muchas calorías.
                  </li>
                  <li>
                    <b>Saltar a la comba</b> con una simple comba que fácilmente
                    puedes trasladar al parque, podrás quemar muchas calorías en
                    poco tiempo. Con sólo saltar la comba unos 15 minutos
                    sentirás el gran esfuerzo cardiovascular que has hecho.
                  </li>
                </ul>
              </p>
              <br/>
              <img
                className="imgs"
                id="img"
                src="https://i.blogs.es/867f85/parque2/1366_2000.jpg"
              ></img>
              <br />
              <br />
              <p style={{fontSize:'2vh', padding:'20px'}}>
                *Las opciones para entrar en calor, fomentar la circulación
                sanguínea y exigir al sistema cardiorrespiratorio son muchas,
                sólo depende del equipamiento del parque o de los objetos que tu
                deseas trasladar o no para entrenar al aire libre. Con estas
                opciones de ejercicios aeróbicos podrás realizar un buen
                calentamiento o bien, quemar calorías para completar el trabajo
                muscular en el parque*
              </p>
              <br />
              <br />
              <Divider />
              <br />
              <h4>
                EJERCICIOS DE MUSCULACIÓN EN EL PARQUE <BiDownArrowCircle />
              </h4>
              <br />
              <p>
                Para trabajar diferentes músculos del cuerpo tienes que tener
                muy en cuenta las instalaciones del parque, las posibilidades de
                apoyo, así como los ejercicios de autocarga donde trabajarás con
                el propio peso del cuerpo. Así, algunos ejercicios que puedes
                realizar para trabajar duro al aire libre son:
                <p style={{ textAlign: "left" }}>
                  <ul>
                    <li>
                      <u>Sentadillas</u> para trabajar <b>piernas y glúteos:</b>{" "}
                      Puedes dirigir la punta de los pies hacia adelante con
                      ambas piernas en paralelo, o bien, ampliar la separación
                      de las piernas y dirigir los pies hacia afuera para
                      trabajar la cara interna de los muslos.
                    </li>
                    <li>
                      <u>Dominadas</u> para lo cual se necesita una barra fija
                      de la cual poder sujetarnos y colgarnos: Puede ser la
                      barra de un columpio o de una paralela alta. Con este
                      movimiento se trabaja la <b>espalda</b> y de forma
                      secundaria brazos.
                    </li>
                    <li>
                      <u>Fondos entre bancos</u> para trabajar <b>tríceps</b> y
                      de forma secundaria pecho y hombros: Se requiere para su
                      realización un banco del parque o un escalón alto donde
                      apoyar las manos.
                    </li>
                    <li>
                      <u>Abdominales isométricos</u> o estabilización horizontal
                      para trabajar el <b>abdomen</b> en profundidad. También se
                      pueden realizar estabilizaciones laterales para incidir en
                      los oblicuos.
                    </li>
                    <li>
                      <u>Zancadas o lounge</u> para trabajar los músculos de las
                      <b>piernas y glúteos.</b> Puedes realizarlas con
                      desplazamiento hacia adelante, o bien, puedes realizarlas
                      alternas con saltos para un trabajo aeróbico y muscular
                      simultáneo.
                    </li>
                    <li>
                      <u>Flexiones de brazos</u> que podemos realizar en
                      cualquier espacio del parque y podemos aumentar su
                      intensidad si elevamos los pies sobre una escalera. Si
                      cambiamos el apoyo de las manos podremos trabajar
                      diferentes músculos en mayor medida, especialmente{" "}
                      <b>pectoral y tríceps.</b>
                    </li>
                    <li>
                      <u>Superman o extensión lumbar</u> para trabajar la{" "}
                      <b>espalda baja.</b>
                      Podemos realizarlo en cualquier espacio libre del parque,
                      pues no requiere equipamiento ni apoyo extra, sólo nuestro
                      propio cuerpo.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <p>
                    Con estos ejercicios se puede trabajar todo el cuerpo en el
                    parque. Para un entrenamiento adecuado, se pueden realizar
                    circuitos por tiempo, por ejemplo, pasando 30 segundos por
                    cada ejercicio y descansando 20 segundos entre cada uno de
                    ellos. O bien, se pueden realizar 3 series de entre 10 y 15
                    repeticiones cada una de cada ejercicio de los nombrados,
                    descansando entre series entre 20 y 30 segundos. 
                    <br/>
                    <br/>
                    Puedes combinar ejercicios aeróbicos con el trabajo muscular o
                    bien, puedes dedicar un día al entrenamiento cardiovascular
                    y alternar con musculación al día siguiente.
                    <br/>
                    <br/>
                    Recuerda que es posible estar en forma sin necesidad de realizar grandes
                    gastos y que aun lejos del gimnasio, puedes <b>trabajar todo tu
                    cuerpo en el parque</b>, al aire libre y sin dejar de ver
                    resultados.
                    <br/>
                  </p>
                </p>
                <br />
                <img
                  className="imgs"
                  id="img"
                  src="https://i.blogs.es/ba0bbb/parque3/1366_2000.jpg"
                ></img>
                <br />
                <Divider />
                <br />
                <br />
              </p>
            </p>
          </div>
        </div>
        <ArrowUp />
        <FooterPage/>
      </React.Fragment>
    );
  }
}

export default StreetTrain;
