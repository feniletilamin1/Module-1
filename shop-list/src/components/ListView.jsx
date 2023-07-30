import React from 'react'
import ShopItem from './ShopItem'

export default function ListView(props) {
    const { cards } = props;
    const { viewType } = props;
    return (
        <div className={viewType === "cards" ? "cards" : "cards-column"}>
            {cards.map(product => (
                <ShopItem product={product} />
            ))}
        </div>
    )
}
