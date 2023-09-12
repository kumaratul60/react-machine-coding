import React from 'react'
import Child from './child';
import "./main.css"

// todo: implement delete & update functionality and data should be persisted on page load (localStorage)


const NestedComment = () => {
    const [value, isValue] = React.useState([]);
    const commentBox = React.useRef();

    const submitComment = (e) => {
        isValue((prev) => [...prev, { value: commentBox.current.value }]);
    };
    React.useEffect(() => {
        commentBox.current.value = "";
    }, [value]);

    return (
        <>
            <div className="container">
                <input type="text" className="comment-box" ref={ commentBox } />
                <button className="main-btn" onClick={ (e) => submitComment(e) }>
                    Comment
                </button>

                <div className="comment-container">
                    { value.map((val) => {
                        const { value } = val;
                        return <Child data={ value } margin={ 0 } color="red" />;
                    }) }
                </div>
            </div>
        </>
    );
}

export default NestedComment