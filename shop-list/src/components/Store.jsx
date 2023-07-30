import React from 'react'
import ListView from './ListView';
import IconSwitch from './IconSwitch';
import { useState } from 'react';

export default function Store(props) {
    const { products } = props;
    const [viewIcon, setViewIcon] = useState("cards");

    const handleViewIcon = (type) => {
        if (type === 'cards') setViewIcon("list");
        else if (type === 'list') setViewIcon("cards");
    }

    return (
        <>
            <IconSwitch icon={viewIcon} onSwitch={handleViewIcon} />
            <ListView viewType={viewIcon} cards={products} />
        </>
    )
}
