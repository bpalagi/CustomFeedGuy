'use client';

import { useState, useEffect } from 'react';

import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((feed) => (
        <PromptCard
          key={feed._id}
          feed={feed}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [feeds, setFeeds] = useState([])

  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSerachTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([])

  const filterFeeds = (searchText) => {
    const regex = new RegExp(searchText, 'i');
    return feeds.filter((item) =>
      regex.test(item.creator.username) ||
      regex.test(item.tag) ||
      regex.test(item.feed)
    );
  }

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    //debounce method
    setSerachTimeout(
      setTimeout(() => {
        const searchResult = filterFeeds(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  }

  const fetchFeeds = async () => {
    const response = await fetch('/api/feed');
    const data = await response.json();

    setFeeds(data);
  }

  useEffect(() => {
    fetchFeeds();
  }, [])

  const handleTagClick = (tag) => {
    setSearchText(tag);

    const searchResult = filterFeeds(tag);
    setSearchedResults(searchResult);
  }

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required

          className='search_input peer'
        />
      </form>

      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList
          data={feeds}
          handleTagClick={handleTagClick}
        />
      )}
    </section>
  )
}

export default Feed