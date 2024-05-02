//How to set powerstats as an array in interface?
//Making responsive designs with Tailwind - flex none
//How to keep API call server side with useState/useEffect being client side?
//Rounded input field cutting off first letter - move typing area?
//Remove/style scrollbar?
//Center alignment for search results on desktop?

'use client'

import React, { useEffect, useState, FormEvent } from 'react';
import { PiMagnifyingGlassLight } from "react-icons/pi";

interface HeroData {
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
  const [heroes, setHeroes] = useState<HeroData[]>([]);
  //const [isLoading, setLoading] = useState<boolean>(true);
  const [searchString, setSearchString] = useState<string>("");
  const [search, setSearch] = useState<string>("batman");
  //const handleChange = (e: { target: { value: string}; }) => {setSearch(e.target.value)};
  
  const searchHeroes = (searchValue: string) => {
    if (searchValue === null || searchValue === "") {
      setSearch("a")
    } else {
      setSearch(searchValue)
    }
    console.log(searchValue)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let API_CALL = `https://www.superheroapi.com/api.php/${API_KEY}/search/${search}`
        const response = await fetch(API_CALL);
        const data = await response.json();
        console.log("API Data", data)
        setHeroes(data.results);
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
    console.log(searchString);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchString === null || searchString === "") {
      console.log("No search Parameter set");
    } else {
    setSearch(searchString);
    }
  }

  class SearchIcon extends React.Component {
    render() {
      return <PiMagnifyingGlassLight />
    }
  }
  return (
    <div>
      <h1 className="text-center my-2">Heroes & Villains </h1>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <input type="text" 
          className="m-2 rounded-lg text-center"
          value={searchString} 
          onChange={handleInputChange} 
          placeholder=" Hero search"/>
          <button 
          className="bg-white rounded-full p-1"
          type="submit"><SearchIcon></SearchIcon></button>
          
        </form>
      </div>
        <div className="overflow-scroll mt-4">
          <ul className='flex row scroll-smooth text-center'>
            {heroes.map(hero => 
            <li 
              key={hero.id} 
              className="column mx-2 flex-none" 
              onClick={() => setSearch(hero.name)} >
                <img className="w-auto h-40 rounded-full" src={hero.image.url}/>{hero.name}
              </li>)}
          </ul>
        </div>


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
