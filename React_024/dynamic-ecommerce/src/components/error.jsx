import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="p-4 m-4 text-3xl text-center text-white bg-gray-600">
      <p>Some things went wrong</p>
      {error.message}
    </div>
  );
};

export default Error;
