import React, { useEffect, useState } from "react";

const ImageList = ({ images, messageToSend, updateMessageToSend }) => {
  const [renderSingleImage, setRenderSingleImage] = useState(false);
  const [clickedImage, setClickedImage] = useState("");

  useEffect(() => {
    setRenderSingleImage(false);
  }, [images]);

  const onImageSelected = e => {
    setClickedImage(e.target.src);
    setRenderSingleImage(!renderSingleImage);
    const newMessageToSend = { ...messageToSend, image: e.target.src };
    updateMessageToSend(newMessageToSend);
  };

  return images.length ? (
    <div className={`${renderSingleImage ? "single-image" : "image-list"}`}>
      {renderSingleImage ? (
        <div className="single-image-container" onClick={onImageSelected}>
          <img src={clickedImage} alt="selected" />
        </div>
      ) : (
        images.map(image => (
          <div
            key={image.id}
            className="image-container"
            onClick={onImageSelected}
          >
            <img src={image.urls.regular} alt={image.description} />
          </div>
        ))
      )}
    </div>
  ) : (
    <div>
      <p>No results, please try another search term.</p>
    </div>
  );
};

export default ImageList;
