import { useState, useEffect } from "react";

const AsyncFetch = ({ text }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchDataRes().catch(console.error);
  }, []);
  const fetchDataRes = async () => {
    const fetchData = await fetch("https://dog.ceo/api/breeds/image/random");
    const res = await fetchData.json();
    setData(res.message);
  };

  return (
    <div>
      <h2>{text}</h2>
      <img width={500} src={data} alt="dog" />
    </div>
  );
};
export default AsyncFetch;
