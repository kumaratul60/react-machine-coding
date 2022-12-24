import React from 'react'
import { textData } from './data'
import DataFile from './dataFile'

const Collapsible = () => {
    return (
        <>
            <h1> Accordion - Collapsible-table</h1>
            { textData.map(({ title, content }) => (
                <DataFile key={ title } title={ title } content={ content } />
            )) }
        </>
    )
}

export default Collapsible