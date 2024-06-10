/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const InfiniteScroll = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop ===
                document.documentElement.offsetHeight
            ) {
                if (!loading && hasMore) {
                    fetchData();
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, hasMore]);

    const fetchData = () => {
        setLoading(true);
        // Simulate API call delay
        setTimeout(() => {
            // Simulated response data
            const newData = Array.from({ length: 10 }, (_, index) => ({
                id: index + data.length,
                text: `Item ${index + data.length}`,
            }));
            setData(prevData => [...prevData, ...newData]);
            setPage(prevPage => prevPage + 1);
            setLoading(false);
            if (newData.length === 0) {
                setHasMore(false);
            }
        }, 1000);
    };

    return (
        <div>
            <h1>Infinite Scroll Example</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
            {loading && <p>Loading...</p>}
            {!loading && hasMore && <p>Scroll down to load more</p>}
            {!loading && !hasMore && <p>No more data to load</p>}
        </div>
    );
};

export default InfiniteScroll;
