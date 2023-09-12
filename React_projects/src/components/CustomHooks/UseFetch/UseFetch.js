import React, { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchPost();
    }, [url]);

    const fetchPost = async () => {
        try {
            const fetchPostData = await fetch(url);
            const fetchResponse = await fetchPostData.json();
            setPost(fetchResponse);
            console.log(fetchResponse);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    return { post, loading };
};

export default function UseFetch() {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const { post, loading } = useFetch(url);

    if (loading) {
        return <p> Loading.....</p>;
    }

    return (
        <div>
            { post.map((item) => (
                <li key={ item.id }>{ item.title }</li>
            )) }
        </div>
    );
}