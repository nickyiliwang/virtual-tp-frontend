import React from "react";
import unsplash from "../../utils/unsplash";
import "./PictureFetcher.css";
import SearchBar from "./Components/SearchBar";
import ImageList from "./Components/ImageList";

class PictureFetcher extends React.Component {
  state = {
    imageArr: []
  };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term
      }
    });
    this.setState({ imageArr: response.data.results });
  };

  render() {
    return (
      <div id="search-bar-container" className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.imageArr} />
      </div>
    );
  }
}

export default PictureFetcher;
