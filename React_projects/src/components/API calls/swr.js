import useSWR from "swr";

const UseSWRMethod = ({ text }) => {
  // here ...agrs is url
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    "https://dog.ceo/api/breeds/image/random",
    fetcher,
    {
      suspense: true,
    }
  );
  if (error) {
    return <h1>There is an error in swr</h1>;
  }

  return (
    <div>
      <h2>{text}</h2>
      {/* with suspense:true =>src={data.message}
    without suspense:true =>src={data?.message}
    */}
      <img width={500} src={data.message} alt="dog" />
    </div>
  );
};
export default UseSWRMethod;
