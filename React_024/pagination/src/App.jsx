
import { useEffect, useState } from 'react';
import './App.css';
import Pagination from './Pagination';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 10; // Number of items per page

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const resData = await response.json()
      setData(resData);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="App">
      <h1>Pagination Component Example</h1>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div>
          <ul>
            {currentItems.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
          <Pagination
            totalPages={Math.ceil(data.length / itemsPerPage)}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default App;
