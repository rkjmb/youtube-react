import axios from "axios";

const KEY = "AIzaSyD1o35WBPRpn1ky-epbxJRarWTwZxlxy2k";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    maxResults: 5,
    part: "snippet",
    key: KEY
  }
});
