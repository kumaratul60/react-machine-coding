import  { useState } from 'react';

const DragDropList = () => {
    const [items, setItems] = useState([
        { id: 'item-1', content: 'Item 1' },
        { id: 'item-2', content: 'Item 2' },
        { id: 'item-3', content: 'Item 3' },
        { id: 'item-4', content: 'Item 4' },
    ]);

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData('index', index);
    };

    const handleDragOver = (e, index) => {
        e.preventDefault();
        const dragIndex = e.dataTransfer.getData('index');
        if (dragIndex !== index.toString()) {
            const newItems = [...items];
            const draggedItem = newItems[dragIndex];
            newItems.splice(dragIndex, 1);
            newItems.splice(index, 0, draggedItem);
            setItems(newItems);
        }
    };

    return (
        <div>
            <h2>Drag and Drop List</h2>
            <ul>
                {items.map(({ id, content }, index) => (
                    <li
                        key={id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragOver={(e) => handleDragOver(e, index)}
                    >
                        {content}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DragDropList;
