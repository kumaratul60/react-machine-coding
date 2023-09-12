import React, { useState, useEffect } from "react";
import "./styles.css";

const Pagination = () => {
  const [post, setPost] = useState([]);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(10);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/comments");
      const dataJ = await data.json();
      setPost(dataJ);
    };
    fetchApi();
  }, []);

  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = post.slice(firstPost, lastPost);
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(post.length / postPerPage); i++) {
    pageNumber.push(i);
  }

  const ChangePage = (pageNumber) => {
    setNumber(pageNumber);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <table>
            <thead>
              <tr>
                <th>S No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              {currentPost.map((Val) => {
                return (
                  <>
                    <tr
                      className="border-2 border-dark text-center"
                      key={Val.id}
                    >
                      <td className="border-2 border-dark th-1">{Val.id}</td>
                      <td className="border-2 border-dark th-1">{Val.name}</td>
                      <td className="border-2 border-dark th-1">{Val.email}</td>
                      <td className="border-2 border-dark th-1">{Val.body}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>

          <div className="my-3 text-center">
            <button
              className="px-3 py-1 m-1 text-center btn-primary"
              onClick={() => setNumber(number - 1)}
            >
              Previous
            </button>

            {pageNumber.map((Elem) => {
              return (
                <>
                  <button
                    className="px-3 py-1 m-1 text-center btn-outline-dark"
                    onClick={() => ChangePage(Elem)}
                  >
                    {Elem}
                  </button>
                </>
              );
            })}
            <button
              className="px-3 py-1 m-1 text-center btn-primary"
              onClick={() => setNumber(number + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
