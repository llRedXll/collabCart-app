import React from 'react';

const Item = ({ item, toggleItem, deleteItem }) => {
    return (
        <div className="list-item" draggable="true">
            <div className="item-content">
                <div className="drag-handle">⋮⋮</div>
                <div
                    className={`item-checkbox ${item.completed ? 'checked' : ''}`}
                    onClick={() => toggleItem(item.id)}
                ></div>
                <div className={`item-text ${item.completed ? 'completed' : ''}`}>
                    {item.text}
                </div>
            </div>
            <div className="item-meta">
                <span className="item-user">{item.addedBy}</span>
                <span className="item-time">{item.addedAt}</span>
                <button className="delete-btn" onClick={() => deleteItem(item.id)}>
                    ×
                </button>
            </div>
        </div>
    );
};

export default Item;