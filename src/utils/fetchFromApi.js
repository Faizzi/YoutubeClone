import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const API_KEY ="0f242f93b9mshe5710e2b2b8c9bbp123ea3jsn9d18c228b30f"
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
  return data;
};
