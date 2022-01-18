import axios from '../../../node_modules/axios/index';
import usePromise from '../../lib/usePromise';

const useNewsList = (category) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=cf09eef652664e98aac3ad0313a6e148`,
    );
  }, [category]);

  // response 가 null 일 경우 빈 배열 넘김
  let articles = [];
  if (response) {
    ({ articles } = response.data);
  }

  return {
    articles,
    loading,
    error,
  };
};

export default useNewsList;
