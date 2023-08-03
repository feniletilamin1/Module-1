type TItemsProps = {
    item: TItem
}

function checkCurrencyCode(currencyCode: string): string {
    if(currencyCode === "USD") return "$";
    else if(currencyCode === "EUR") return "€";
    else return "GPB"
}

function checkQuantity(quantity: number): string {
    if(quantity > 20) return "item-quantity level-high";
    else if(quantity > 10) return "item-quantity level-medium";
    else return "item-quantity level-low";
}

export default function Item({item}: TItemsProps) {
    if (item.title === undefined || item.MainImage === undefined || item.currency_code === undefined || item.price === undefined || item.quantity === undefined || item.url === undefined) return;
    return (
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage?.url_570xN}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{item.title}</p>
                <p className="item-price">{item.price}{checkCurrencyCode(item.currency_code)}</p>
                <p className={checkQuantity(item.quantity)}>{item.quantity} left</p>
            </div>
        </div>
    )
}
