import React, { useState, useEffect } from "react";
import usePaginatedCustomFetch from "../utils/paginatedCustomFetch";
import ProductCard from "./productCard";
import Pagination from "./pagination";

const ProductListing = () => {
  const URL = "https://dummyjson.com/products";
  const { fetchRes, loading, fetchMoreItems, allItemsFetched } = usePaginatedCustomFetch(URL);

  const [currentPage, setCurrentPage] = useState(1); // Local state for current page
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = fetchRes.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    setCurrentPage(1); // Reset current page when URL changes
  }, [URL]);

  // Function to handle scroll events
  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && !loading && !allItemsFetched) {
      fetchMoreItems();
    }
  };

  // Function to handle page change (not used directly for scroll-based pagination)
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber); // Update local current page state
  };

  return (
    <div className="p-4" onScroll={handleScroll} style={{ maxHeight: "600px", overflowY: "auto" }}>
      <h1 className="text-2xl mb-4">Product Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {fetchRes
          .slice(0, currentPage * itemsPerPage) // Display items up to the current page
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      <div className="mt-4 flex justify-center">
        {allItemsFetched ? (
          <p className="text-gray-500">Fetched all items</p>
        ) : (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(fetchRes.length / itemsPerPage)}
            onPageChange={handlePageChange} // Handle traditional pagination (not used for scroll-based)
          />
        )}
      </div>
    </div>
  );
};

export default ProductListing;
