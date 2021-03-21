import React, {useState ,useEffect} from 'react';

function Shop() {

        const [items,setItems]=useState([])

        useEffect(()=>{
            fetchItems()
        },[])

      // we've used the async here cause we're fetching data from an api 
  const fetchItems = async()=>{
    const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get');
    const items = await data.json ;
    console.log(items.items)
    setItems(items.items)
  }

  
  return (
    <div>
   {items.map(item=>(
                    <h1>{item.name}</h1>
   ))}
    </div>
  );
}

export default Shop;
