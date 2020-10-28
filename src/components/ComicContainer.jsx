import React, { useEffect } from "react";
//STYLE
import "../assets/style/components/ComicContainer.scss";
//COMPONENTS
import { StarRating } from "./StarRating";
//REDUX
import { getComic } from "../redux/comicsDuck";
import { useDispatch, useSelector } from "react-redux";

const ComicContainer = () => {
  const dispatch = useDispatch();
  const comic = useSelector((store) => store.comics.data);

  useEffect(() => {
    dispatch(getComic());
  }, [dispatch]);

  const { img, alt, title } = comic;

  return (
    <div className="ComicContainer">
      <div className="ComicContainer__main">
        <h2>{title}</h2>
        <img src={img} alt={alt} />
        <StarRating comic={comic} />
      </div>
    </div>
  );
};

export default ComicContainer;
