import axios from "axios";
import { useState, useEffect } from "react";

const AsyncAxios = ({ text }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchDataRes();
  }, []);
  const fetchDataRes = async () => {
    try {
      const fetchData = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      const res = await fetchData.data;
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
export default AsyncAxios;
