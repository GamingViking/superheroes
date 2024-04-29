//How to set powerstats as an array in interface?
//How to set interface types that are one level deeper?
//How to keep API call server side with useState/useEffect being client side?

'use client'

import React, { useEffect, useState } from 'react';

interface DataItem {
  powerstats: any;
  id: number;
  name: string;
  image: string;
}


let heroSearch = "batman";
const API_KEY = "a34d3ae98eaa808e2d1975f5382ed007"

const DataComponent: React.FC = () => {
  const [items, setItems] = useState<DataItem[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("batman");
  const handleChange = (e: { target: { value: string}; }) => {setSearch(e.target.value)};
  
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
        let API_CALL = `https://www.superheroapi.com/api.php/${API_KEY}/search/${search}`
  //       const response = await fetch(API_CALL);
  //       const data = await response.json();
  //       console.log("API Data", data)
  //       setItems(data.results);
  //     } catch (error) {
  //       console.error('Failed to fetch data:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  async function getResponse() {
    const response = await fetch(API_CALL);
    const data = await response.json();
  }

  //if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Hero Finder</h1>
        <input type="text" value={search} onChange={handleChange}></input>
      <ul>    
        {(Array.isArray(items)) && items.map(item => (
          <>
            <li key={item.id} className="text-xl font-bold italic text-center mb-4">Name: {item.name} ({item.biography.aliases[0]})</li>
            <img key={item.id} className="rounded-full shadow-2xl size-1/3 justify-center" src={item.image.url} />
            <li key={item.id}>Strength: {item.powerstats.strength}</li>
            <li key={item.id}>Intelligence: {item.powerstats.intelligence}</li>
          </>
        ))}
      </ul>
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
