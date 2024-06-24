import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [...Array(totalPages).keys()].map((pageNumber) => pageNumber + 1);

  return (
    <nav className="flex justify-center">
      <div className="flex pl-0 rounded list-none flex-wrap">
        {/* Previous button */}
        <div className="mx-1">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Prev
          </button>
        </div>

        {/* Render page numbers */}
        {pageNumbers.map((pageNumber) => (
          <div key={pageNumber} className="mx-1">
            <button
              onClick={() => onPageChange(pageNumber)}
              className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded ${
                pageNumber === currentPage ? "bg-blue-500 text-white" : ""
              }`}
            >
              {pageNumber}
            </button>
          </div>
        ))}

        {/* Next button */}
        <div className="mx-1">
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Pagination;
