import axios from "axios";
const API_KEY = "eld3SEqpmjkgE874WLVZ6PFTNSgWjyOCYq7yYgpQ_-g";
const API_URL = "https://api.unsplash.com/search/photos";
export const fetchGallery = async (query, page = 1) => {
  const data = await axios.get(API_URL, {
    params: {
      query: query,
      page,
      per_page: 12,
      client_id: API_KEY,
    },
  });
  return data;
};
