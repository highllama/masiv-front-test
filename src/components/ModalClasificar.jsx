import React, { useState } from "react";
//STYLE
import "../assets/style/components/ModalClasificar.scss";
//REDUX
import { useDispatch } from "react-redux";
import {addComic,getComic} from '../redux/comicsDuck'

export const ModalClasificar = ({ setModal, rating, comic,setRating }) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const rateComment = () => {
    dispatch(addComic(rating,description,comic))
    dispatch(getComic())
    setRating(0)
    setModal(false)
  }

  const handleChange = (e) => {
    setDescription(e.target.value);
  };
  return (
    <div className="ModalClasificar">
      <div className="ModalClasificar__main">
        <div className="ModalClasificar__main__header">
          <h2>Clasificar</h2>
          <button onClick={() => setModal(false)}>X</button>
        </div>
        <div>
          <h2>Rating: {rating}</h2>
        </div>
        <div>
          <label>
            Descripccion <br />
            <textarea
              type="text-area"
              value={description}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button onClick={rateComment} className="button">Submit</button>
        </div>
      </div>
    </div>
  );
};
