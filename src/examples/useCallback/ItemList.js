import React, { useEffect, useState } from 'react';

export const ItemsList = ({ getItems }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log('render')
        setItems(getItems());
    }, [getItems])

    return (
        <ul>
            {items.map(item => <li key = {item}>{item}</li>)}
        </ul>
    )
}