import React, { useState } from "react";
//REDUX
import { useSelector } from "react-redux";
//STYLE
import "../assets/style/components/ListComics.scss";

export const ListComics = () => {
  const store = useSelector((store) => store.comics.comics);
  const [sort, setSort] = useState(false);
  const handleChange = (e) => {
    setSort(e.target.value);
  };

  switch (sort) {
    case "1":
      store.sort((a, b) => a.year - b.year).reverse();
      break;
    case "2":
      store.sort((a, b) => a.rating - b.rating).reverse();
      break;
    case "3":
      store.sort((a, b) => a.year - b.year);
      break;
    case "4":
      store.sort((a, b) => a.rating - b.rating);
      break;
    default:
      break;
  }
  return (
    <div className="ListComics wrapper">
      {store.length > 0 ? (
        <div className="ListComics__sort">
          Sort By:
          <select value={sort} onChange={handleChange}>
            <option value="1">año</option>
            <option value="2">rating</option>
            <option value="3">año {"(desc)"}</option>
            <option value="4">rating {"(desc)"}</option>
          </select>
        </div>
      ) : (
        <></>
      )}
      <div className="ListComics__main">
        {store.map((item) => (
          <div className="ListComics__item" key={item.title}>
            <div className="ListComics__item__description" >
              <strong> title: </strong> {item.title} <br />
              <strong> year: </strong> {item.year} <br />
              <strong> description: </strong> {item.description} <br />
              <strong> imageUrl: </strong> {item.img} <br />
              <strong> rating: </strong> {item.rating}&#9734;
            </div>
            <div>
              <img src={item.img} alt={item.title} height="150" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
