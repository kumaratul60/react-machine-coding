
// eslint-disable-next-line react/prop-types
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const handlePageClick = (page) => {
        onPageChange(page);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => handlePageClick(i)}
                    className={`page-number ${i === currentPage ? 'active' : ''}`}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="pagination">
            <button
                onClick={() => handlePageClick(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            {renderPageNumbers()}
            <button
                onClick={() => handlePageClick(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
