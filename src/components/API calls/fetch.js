import { useState, useEffect } from "react";

const Fetch = ({ text }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((apiData) => setData(apiData.message));
  }, []);

  return (
    <div>
      <h2>{text}</h2>
      <img width={500} src={data} alt="dog" />
    </div>
  );
};
export default Fetch;
