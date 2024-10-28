import axios from "axios";
const API_KEY = "eld3SEqpmjkgE874WLVZ6PFTNSgWjyOCYq7yYgpQ_-g";
const API_URL = "https://api.unsplash.com/search/photos";

export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  likes: number;
  user: {
    name: string;
  };
}

interface ResponseData {
  results: Image[];
}

export const fetchGallery = async (
  query: string,
  page: number = 1
): Promise<ResponseData | any> => {
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
