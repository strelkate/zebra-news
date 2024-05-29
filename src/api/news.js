import axios from 'axios';

const api = axios.create({
  baseURL: 'http://flems.github.io/test/api'
});

export async function getNews(page) {
  let url = '/news/';
  if (page) {
    url += `${page}/`;
  }

  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error('get news error:', error);
    return null;
  }
}
