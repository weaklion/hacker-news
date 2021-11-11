import axios from 'axios';

axios.defaults.baseURL = 'https://hacker-news.firebaseio.com/v0/';

const getCategoryList = async(category) => {
  const { data } =  await axios.get(`${category}.json?print=pretty`);
  return data;
}

const getCategoryDetail = async(id) => {
  const { data } = await axios.get(`item/${id}.json?print=pretty`);
  return data;
}

export {
  getCategoryList,
  getCategoryDetail,
}