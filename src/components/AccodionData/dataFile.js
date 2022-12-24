import React, { useState } from 'react'
import "./style.css"

const DataFile = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="text">
            <div className="text__item">
                <div className="text__title" onClick={ () => setIsActive(!isActive) }>
                    <div>{ title }</div>
                    <div>{ isActive ? "-" : "+" }</div>
                </div>
                { isActive && <div className="text__content">{ content }</div> }
            </div>
        </div>
    );
}

export default DataFile