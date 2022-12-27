import React from 'react'

const Child = ({ data, margin, color }) => {
    const [reply, isReply] = React.useState([]);
    const [clickReply, isClickReply] = React.useState(false);
    const replyRef = React.useRef();
    const [marginValue] = React.useState(margin);

    const replayHandler = () => {
        isClickReply((val) => !val);
        const replayValue = replyRef.current.value;
        isReply((prev) => [...prev, { reply: replayValue }]);
        replyRef.current.value = "";
    };

    return (
        <>
            <div
                className="comment-area"
                style={ {
                    marginLeft: margin * 12 + "px",
                    borderLeft: color ? `5px solid ${color}` : "none"
                } }
            >
                <p>{ data }</p>

                <div>
                    {
                        <input
                            type="text"
                            name=""
                            id=""
                            className="reply-box"
                            ref={ replyRef }
                        />
                    }
                    <button className="reply" onClick={ replayHandler }>
                        Reply
                    </button>
                </div>
            </div>

            { reply !== []
                ? reply.map((val) => {
                    const { reply } = val;
                    return <Child data={ reply } margin={ marginValue + 1 } />;
                })
                : "" }
        </>
    );
}

export default Child