import React, { useEffect, useState } from "react";

import "./Search.css";

const Search = () => {
  const [titles, setTitles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [search, setSearch] = useState([]);
  const [isData, setIsData] = useState(true);

  const getAsyncTitles = async () => {
    try {
      fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((json) => {
          setTitles(json.products);
          console.log(json.products);
          setIsData(false);
        });
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    getAsyncTitles();
  }, []);

  const filterSearchData = titles.filter((user) => {
    return Object.values(user)
      .join("")
      .toLocaleLowerCase()
      .includes(searchQuery.toLocaleLowerCase());
  });

  useEffect(() => {
    if (searchQuery) {
      const dSearch = setTimeout(() => {
        setSearch(filterSearchData);
      }, 500);
      return () => clearTimeout(dSearch);
    } else setTitles(titles);
  }, [searchQuery]);

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className="wrapper">
      <h1>hay search something here</h1>
      <input
        className="search"
        type="text"
        placeholder="search product"
        onChange={handleSearchQuery}
      />
      <div className="grid-main">
        {searchQuery.length > 0
          ? search.map((searchData, id) => {
              return (
                <div className="child" key={id}>
                  <h2>{searchData.title}</h2>
                  <p>₹{searchData.price}</p>
                  <p>{searchData.brand}</p>
                  <p>{searchData.category}</p>
                  <p>{searchData.description}</p>
                </div>
              );
            })
          : titles.map((item, idx) => (
              <div className="child" key={idx}>
                <h2>{item.title}</h2>
                <p>{item.price}</p>
                <p>{item.brand}</p>
                <p>{item.category}</p>
                <p>{item.description}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Search;
