import React from "react";
//STYLE
import "../assets/style/containers/Home.scss";
import ComicContainer from "../components/ComicContainer";
import { ListComics } from "../components/ListComics";
const Home = () => {
  return <div className="Home">
     <ComicContainer />
     <ListComics />
  </div>;
};

export default Home;
