import React, { useState } from "react";
import unsplash from "../../utils/unsplash";
import "./PictureFetcher.css";
import SearchBar from "./Components/SearchBar";
import ImageList from "./Components/ImageList";

export const PictureFetcher = ({ messageToSend, updateMessageToSend }) => {
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (term = "toilet paper") => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term
      }
    });
    setImages(response.data.results);
  };

  return (
    <div id="search-bar-container" className="ui container">
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};
