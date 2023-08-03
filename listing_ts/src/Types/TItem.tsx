type TItem = {
    listing_id: number,
    url?: string,
    MainImage?: Image,
    title?: string,
    currency_code?: string,
    price?: string,
    quantity?: number
}

type Image = {
    url_570xN: string,
}