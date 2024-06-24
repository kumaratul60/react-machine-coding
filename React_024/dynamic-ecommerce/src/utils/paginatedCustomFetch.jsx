import { useState, useEffect } from "react";

const usePaginatedCustomFetch = (initialUrl) => {
  const [fetchRes, setFetchRes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allItemsFetched, setAllItemsFetched] = useState(false);
  const [page, setPage] = useState(1); // Local state for page number
  const [limit, setLimit] = useState(30); // Initial limit from API

  const fetchMoreItems = async () => {
    try {
      const nextPageUrl = `${initialUrl}&skip=${page * limit}&limit=${limit}`;
      const fetchUrl = await fetch(nextPageUrl);
      const newData = await fetchUrl.json();
      if (newData.products.length === 0) {
        setAllItemsFetched(true);
      } else {
        setFetchRes((prevData) => [...prevData, ...newData.products]);
        setPage((prevPage) => prevPage + 1); // Increment local page state
      }
    } catch (error) {
      console.error("Error fetching more items:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchUrl = await fetch(initialUrl);
        const resJson = await fetchUrl.json();
        setFetchRes(resJson.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [initialUrl]);

  return { fetchRes, loading, fetchMoreItems, allItemsFetched };
};

export default usePaginatedCustomFetch;
