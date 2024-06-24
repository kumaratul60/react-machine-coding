import React, { useState } from "react";
import useCustomFetch from "../utils/customFetch";
import ProductCard form "./productCard"
import Pagination from "./pagination";

const ProductListing = () => {
  const URL = "https://dummyjson.com/products";

  const fetchRes = useCustomFetch(URL);
  const products = fetchRes?.products || [];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  // Logic for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Product Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))} */}

        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(products.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductListing;
