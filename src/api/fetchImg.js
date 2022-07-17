import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '27696488-47cb76918e6b1b046fc57e4a0';

export const fetchImgOptions = {
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
  page: 1,
};

const customAxios = axios.create({
  baseURL: `${BASE_URL}?key=${API_KEY}`,
});

export const fetchImg = async params => {
  try {
    return await customAxios.get('', { params });
  } catch (error) {
    toast.error('Pixabay error!');
  }
};
