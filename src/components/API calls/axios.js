import axios from "axios";
import { useState, useEffect } from "react";

const Axios = ({ text }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => setData(res.data.message))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>{text}</h2>
      <img width={500} src={data} alt="dog" />
    </div>
  );
};
export default Axios;
