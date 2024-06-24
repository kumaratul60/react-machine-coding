import React, { useState, useEffect } from "react";

const useCustomFetch = (url) => {
  const [fetchRes, setFetchRes] = useState([]);

    useEffect(() => {
      // fetch(url)
      //   .then((response) => response.json())
      //   .then((data) => setFetchRes(data));

      const fetchData = async () => {
        try {
          const fetchUrl = await fetch(url);
          const resJson = await fetchUrl.json();
          setFetchRes(resJson);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, [url]);

  return fetchRes;
};

export default useCustomFetch;
