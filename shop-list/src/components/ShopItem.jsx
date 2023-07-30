import React from 'react'

export default function ShopItem(props) {
    const { product } = props;
    return (
        <div className="card" key={product.id}>
            <div className="card__inner-wrapper">
                <div className="card__image">
                    <img src={product.img} alt={product.name} />
                </div>
                <div className="card__content">
                    <h3 className="card__title">{product.name}</h3>
                    <p className="card__color">{product.color}</p>
                    <p className="card__price">${product.price}</p>
                    <button className="card__button">Buy</button>
                </div>
            </div>
        </div>
    )
}
