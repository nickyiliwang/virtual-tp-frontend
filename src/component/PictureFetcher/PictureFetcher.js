import React, { useState, useEffect } from "react";
import { SearchBar } from "./Components/SearchBar";
import ImageList from "./Components/ImageList";
import { fetchData } from "../apiCalls";

export const PictureFetcher = ({ messageToSend, updateMessageToSend }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetchData("toilet paper").then(res => {
      setImages(res);
    });
  }, []);

  const onSearchSubmit = async term => {
    fetchData(term).then(res => {
      setImages(res);
    });
  };

  return (
    <div className="search-bar-container">
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList
        images={images}
        messageToSend={messageToSend}
        updateMessageToSend={updateMessageToSend}
      />
    </div>
  );
};
