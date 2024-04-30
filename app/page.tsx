//How to set powerstats as an array in interface?
//How to set interface types that are one level deeper? - DESTRUCTURING
//Making responsive designs with Tailwind
//Naming conventions - items?
//Limit API calls?
//How to keep API call server side with useState/useEffect being client side?

'use client'

import React, { useEffect, useState } from 'react';

interface DataItem {
  powerstats: number[];
  id: number;
  name: string;
  image: {
    url: string;
  }
}


//let heroSearch = "batman";
const API_KEY = "a34d3ae98eaa808e2d1975f5382ed007"

const DataComponent: React.FC = () => {
  const [items, setItems] = useState<DataItem[]>([]);
  //const [isLoading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("batman");
  //const handleChange = (e: { target: { value: string}; }) => {setSearch(e.target.value)};
  
  const searchItems = (searchValue: string) => {
    setSearch(searchValue)
    console.log(searchValue)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
       let API_CALL = `https://www.superheroapi.com/api.php/${API_KEY}/search/${search}`
        const response = await fetch(API_CALL);
        const data = await response.json();
        console.log("API Data", data)
        setItems(data.results);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } 
      // finally {
      //   setLoading(false);
      // }
    };

    fetchData();
  }, [search]);

  ///////////////////////////////////////////////////////////////////
  // async function getResponse() {
  //   let API_CALL = `https://www.superheroapi.com/api.php/${API_KEY}/search/${search}`
  //   const response = await fetch(API_CALL);
  //   if (!response.ok) {
  //     throw new Error(`HTTP error! status: ${response.status}`)
  //   }
  //   const data = await response.json();
  //   setItems(data.results);
  //   //let heroInfo = data.results;
  //   console.log("API Data", data)
    
  //   getResponse();
  // }

  ////////////////////////////////////////////////////////////////
  //if (isLoading) return <p>Loading...</p>;


  function handleClick() {
    setSearch("cat");
    console.log("button did a thing");
  }

  return (
    <div>
      <h1>Hero Finder</h1>
        <input type="text" value={search} onChange={(e) => searchItems(e.target.value)}></input>
        <button style={{backgroundColor: "green", height: 30, width: 100, borderRadius: 20}} onClick={()=> handleClick()}>Catify</button>
        <ul>
          {items.map(item => <li key={item.id} className="flex row justify-between w-1/2" onClick={() => setSearch(item.name)} ># {item.id} - {item.name} <img className="h-20 rounded-full" src={item.image.url}/></li>)}
        </ul>


      {/* <ul>    
        {(Array.isArray(items)) && items.map(item => (
          <>
            <li key={item.id} className="text-xl font-bold italic text-center mb-4">Name: {item.name} ({item.biography.aliases[0]})</li>
            <img key={item.id} className="rounded-full shadow-2xl size-1/3 justify-center" src={item.image.url} />
            <li key={item.id}>Strength: {item.powerstats.strength}</li>
            <li key={item.id}>Intelligence: {item.powerstats.intelligence}</li>
          </>
        ))}
      </ul> */}
    </div>
  );
};

export default DataComponent;

// let heroid = 73;
// export default async function Home() {
//  fetch(`https://www.superheroapi.com/api.php/a34d3ae98eaa808e2d1975f5382ed007/${heroid}`).then(response => {
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
//  })
//  .then(data => {
//   const heroName = data.name;
//   const hero_Id = data.id;
//   const heroImage = data.image.url;
//   outputElement.innerHTML = ``
//  })

//   return (
//     <>
//       <h1>Heroes</h1>
//       <ul>
//         <li>{hero_Id}</li>
//         <li>{heroName}</li>
//         <li>{hero.powerstats.strength}</li>
//         <img src={heroImage} />
//       </ul>
//     </>
//   );
// }
