import axios from "axios";
import { unsplash } from "../utils/unsplash";

export const fetchData = async term => {
  const response = await unsplash.get("/search/photos", {
    params: {
      query: term
    }
  });
  return response.data.results;
};
