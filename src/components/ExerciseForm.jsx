import React from "react";
import "../components/styles/ExerciseForm.css";
import {Link} from 'react-router-dom';

const ExercisesForm = ({onChange, form, onSubmit}) => (
  <div className="container-form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre del ejercicio"
              name="title"
              onChange={onChange}
              value={form.title}
              maxLength="25"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Descripción"
              name="description"
              onChange={onChange}
              value={form.description}
              maxLength="50"
            />
          </div>

          <div class="form-group">
            <label>Selecciona un color de texto:</label>
            <select
              class="form-control"
              name="textColor"
              onChange={onChange}
              value={form.textColor}
            >
              <option value="#000">Negro</option>
              <option value="#fff">Blanco</option>
              <option value="#f4401C">Rojo</option>
              <option value="#0470F9">Azul</option>
              <option value="#1CF46E">Verde</option>
              <option value="#FCF107">Amarillo</option>
              <option value="#FF8F00">Naranja</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">
              Selecciona una imágen:
            </label>
            <select
              class="form-control"
              id="form-img"
              name="img"
              onChange={onChange}
              value={form.img}
            >
              <option value="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise03.png?alt=media&token=8e5301c0-151e-415d-bd2c-655235d9c916">
                Imágen 1
              </option>
              <option value="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06">
                Imágen 2
              </option>
              <option value="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercises02.png?alt=media&token=a5d55381-5f3e-4f25-92dd-560775f96aa2">
                Imágen 3
              </option>
              <option value="https://i.ibb.co/FJ9XGys/exercise-1.png">
                Imágen 4
              </option>
              <option value="https://i.ibb.co/MBLQ0Xh/exce-1.png">
                Imágen 5
              </option>
              <option value="https://i.ibb.co/zF2LLD6/exce-2.png">
                Imágen 6
              </option>
              <option value="https://i.ibb.co/0VDgdJF/exce-3.png">
                Imágen 7
              </option>
              <option value="https://i.ibb.co/9h2jKZG/exc-4.png">
                Imágen 8
              </option>
            </select>
          </div>

          <div className="form-row">
            <div className="col">
              <label>Selecciona el color izquierdo:</label>
              <select class="form-control"
              name="leftColor"
              onChange={onChange}
              value={form.leftColor}>
              <option value="#00E0FF">Por defecto</option>
              <option value="#FFF">Blanco</option>
              <option value="#000">Negro</option>
              <option value="#ff0000">Rojo</option>
              <option value="#a900ff">Morado</option>
              <option value="#00ff04">Verde</option>
              <option value="#000fff">Azul</option>
              <option value="#ff7800">Naranja</option>
              <option value="#ff00c5">Rosa</option>
              </select>
              </div>
              </div>
              <br/>
              
              <div className="form-row">
            <div className="col">
              <label>Selecciona el color derecho:</label>
              <select class="form-control"
              name="rightColor"
              onChange={onChange}
              value={form.rightColor}>
              <option value="#0E6CA5">Por defecto</option>
              <option value="#FFF">Blanco</option>
              <option value="#000">Negro</option>
              <option value="#ff0000">Rojo</option>
              <option value="#a900ff">Morado</option>
              <option value="#00ff04">Verde</option>
              <option value="#000fff">Azul</option>
              <option value="#ff7800">Naranja</option>
              <option value="#ff00c5">Rosa</option>
              </select>
              </div>
              </div>


          <br />
          <Link to="/exercise" id="volver-btn" class="btn btn-dark">Volver</Link>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
        <br />
        <div className="descrip-container">
          <p id="descrip">
            *La descripcion no es visible en dispositivos pequeños
          </p>
        </div>
      </div>
)
export default ExercisesForm;
