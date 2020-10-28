import React, { useState } from "react";
//STYLE
import "../assets/style/components/StarRating.scss";
import { FaStar } from "react-icons/fa";
import { ModalClasificar } from "./ModalClasificar";

export const StarRating = ({ comic }) => {
  const [rating, setRating] = useState(null);
  const [state, setState] = useState(null);
  const [modal, setModal] = useState(false);

  return (
    <div className="StarRating">
      {[...Array(5)].map((star, i) => (
        <div>
          <label>
            <input
              key={i + 1}
              type="radio"
              value={i + 1}
              onClick={() => setRating(i + 1)}
            />
            <FaStar
              key={i}
              size={50}
              color={i + 1 <= (state || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setState(i + 1)}
              onMouseLeave={() => setState(null)}
            />
          </label>
        </div>
      ))}
      <button className="button" onClick={() => setModal(!modal)}>
        Clasificar
      </button>
      {modal ? (
        <ModalClasificar
          setModal={setModal}
          setRating={setRating}
          rating={rating}
          comic={comic}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
