import Listing from './components/Listing'
import etsy from './data/etsy.json'

import './App.css'

function App() {
  const data = [];

  for (let index = 0; index < etsy.length; index++) {
    let {listing_id, url, MainImage,title, currency_code, price,quantity} = etsy[index];
    let item = {listing_id, url,MainImage,title, currency_code, price,quantity};
    data.push(item);
  }
  return (
    <Listing items={data} />
  )
}

export default App
