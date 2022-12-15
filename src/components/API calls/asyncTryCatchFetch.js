import { useState, useEffect } from "react";

const AsyncTryFetch = ({ text }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchDataRes();
  }, []);
  const fetchDataRes = async () => {
    try {
      const fetchData = await fetch("https://dog.ceo/api/breeds/image/random");
      const res = await fetchData.json();
      setData(res.message);
    } catch (err) {
      console.log("err=>", err);
      console.error(err);
    }
  };

  return (
    <div>
      <h2>{text}</h2>
      <img width={500} src={data} alt="dog" />
    </div>
  );
};
export default AsyncTryFetch;
