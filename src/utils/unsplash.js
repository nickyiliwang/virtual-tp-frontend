import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 6f5d14d9496a755988b6b00ebb118239172ad64d56636d109977abd79bccb52c"
  }
});
