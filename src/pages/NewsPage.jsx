import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList/index';

const NewsPage = ({ match }) => {
  // 카테고리 기본 값 all
  const category = match.params.category || 'all';
  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
