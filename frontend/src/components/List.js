import React, { useEffect, useState } from 'react';
import Item from './Item';

const List = ({ listId }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`/api/lists/${listId}/items`);
                if (!response.ok) {
                    throw new Error('Failed to fetch items');
                }
                const data = await response.json();
                setItems(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, [listId]);

    const handleItemToggle = async (itemId) => {
        try {
            const response = await fetch(`/api/items/${itemId}/toggle`, { method: 'PATCH' });
            if (!response.ok) {
                throw new Error('Failed to toggle item');
            }
            const updatedItem = await response.json();
            setItems((prevItems) =>
                prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
            );
        } catch (err) {
            setError(err.message);
        }
    };

    const handleItemDelete = async (itemId) => {
        try {
            const response = await fetch(`/api/items/${itemId}`, { method: 'DELETE' });
            if (!response.ok) {
                throw new Error('Failed to delete item');
            }
            setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="list">
            {items.map((item) => (
                <Item
                    key={item.id}
                    item={item}
                    onToggle={handleItemToggle}
                    onDelete={handleItemDelete}
                />
            ))}
        </div>
    );
};

export default List;