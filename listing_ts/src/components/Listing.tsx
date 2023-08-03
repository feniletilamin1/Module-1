import Item from './Item';

type TListingItems = {
    items: TItem[]
}

export default function Listing({items}: TListingItems) {
    return (
        <div className="item-list">
            {items.map((item, index) =>
                <Item key={index} item={item}/>
            )}
        </div>
    )
}
