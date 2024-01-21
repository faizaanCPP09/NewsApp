import React, { useState, useEffect, useRef, useCallback } from 'react';
import NewsItem from '../components/NewsItem';
import PropTypes from 'prop-types';

const createObserver = (loaderRef, handleObserver) => {
  const observer = new IntersectionObserver(handleObserver, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  if (loaderRef.current) {
    observer.observe(loaderRef.current);
  }

  return observer;
};

const disconnectObserver = (observer) => {
  if (observer) {
    observer.disconnect();
  }
};

const News = ({ country = 'in', category = 'general', apiKey }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [hasMore, setHasMore] = useState(true);

  const loaderRef = useRef(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&pageSize=${itemsPerPage}&page=${currentPage}`;

    try {
      const data = await fetch(url);
      const parsedData = await data.json();
      const { totalResults, articles: newArticles } = parsedData;

      setArticles((prevArticles) => [
        ...prevArticles,
        ...newArticles,
      ]);
      setLoading(false);
      setCurrentPage((prevPage) => prevPage + 1);
      setHasMore(articles.length + newArticles.length < totalResults);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  }, [country, category, apiKey, itemsPerPage, currentPage, articles]);

  const handleObserver = useCallback((entries) => {
    if (loading || !hasMore) return;

    if (entries[0].isIntersecting) {
      fetchData();
    }
  }, [loading, hasMore, fetchData]);

  const observer = useRef(null);

  useEffect(() => {
    observer.current = createObserver(loaderRef, handleObserver);
    return () => disconnectObserver(observer.current);
  }, [loaderRef, handleObserver]);

  return (
    <div className='container'>
      <h1 className='class' style={{ fontFamily: 'cursive', marginTop: '6rem' }}>
        NewsMonkey-Top Headline
      </h1>
      <div className='row'>
        {articles.map((element, index) => (
          <div className='col-md-4' key={index}>
            <NewsItem
              title={element.title}
              description={element.description}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
              date={element.publishedAt}
              source={element.source.name}
            />
          </div>
        ))}
      </div>
      <div ref={loaderRef} />
      {loading && (
        <div className='text-center mt-3'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif'
            alt='Loading...'
            width='50'
          />
        </div>
      )}
    </div>
  );
};

News.defaultProps = {
  country: 'in',
  category: 'general',
  //apiKey: 'YOUR_NEWS_API_KEY', // Make sure to replace with your actual API key
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  apiKey: PropTypes.string,
};

export default News;
