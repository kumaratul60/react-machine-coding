import React, { useEffect, useState } from "react";
import { getData } from "../api/api";

function useSuggestions(query = "", deps = []) {
  const [suggestion, setSuggestion] = useState([]);
  let res = [];
  const [data, setData] = useState([]);
  useEffect(() => {
    function getSuggestions() {
      return data.length > 0
        ? data.filter((item) =>
            item.trim().toLowerCase().startsWith(query.trim().toLowerCase())
          )
        : [];
    }
    res = [...new Set(getSuggestions())];
    setSuggestion(res);
  }, [query]);
  useEffect(() => {
    getData.then((data) => {
      setData(data.map((data) => data.state));
    });
  }, []);

  return suggestion;
}

export default useSuggestions;
