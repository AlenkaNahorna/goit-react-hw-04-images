import axios from 'axios';
import { API_KEY, BASE_URL } from 'constants/constants';
import { toast } from 'react-toastify';

const customAxios = axios.create({
  baseURL: `${BASE_URL}?key=${API_KEY}`,
});

export const fetchImg = async params => {
  try {
    return await customAxios.get('', {
      params: {
        ...params,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 12,
      },
    });
  } catch (error) {
    toast.error('Pixabay error!');
  }
};
