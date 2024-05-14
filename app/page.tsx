//Making responsive designs with Tailwind - flex none
//Rounded input field cutting off first letter - add padding to element
//How to keep API call server side with useState/useEffect being client side?
//Remove/style scrollbar- hidden with a style in globalcss
//Change class components to functional components - icons?
//serach icon adjustment - absolute positioning?
//Tailwind shorthand intellisense showing up?
//Componentize elements
//Handle searching names that aren't included
//Using variables in a className? - pass an object with string interpolation
//Colors for background gradient - aesthetic?
//Currently grabbing previous hero's aligment for display - useEffect hook updating on alignment
//Aesthetic improvements?
//What should be inside of DataComponent?
//Sizing not working? i.e. 1/2?
//Bolding part of text, not tailwindy?

'use client'

import React, { useEffect, useState, FormEvent } from 'react';
import { PiMagnifyingGlassLight } from "react-icons/pi";
import HeroInformation from './components/heroinformation';

interface HeroData {
  powerstats: number[];
  id: number;
  name: string;
  image: {
    url: string;
  }
}

interface HeroInfo {
  powerstats: number[];
  biography: {
    "full-name": string;
    publisher: string;
    alignment: string;
  }
  id: number;
  name: string;
  image: {
    url: string;
  }
}

//let heroSearch = "batman";
const API_KEY = "a34d3ae98eaa808e2d1975f5382ed007";
// let bgColor1 = "from-blue-100";
// let bgColor2 = "via-yellow-200";
// let bgColor3 = "to-blue-100";

const DataComponent: React.FC = () => {
  const [heroes, setHeroes] = useState<HeroData[]>([]);
  //const [isLoading, setLoading] = useState<boolean>(true);
  const [searchString, setSearchString] = useState<string>("");
  const [search, setSearch] = useState<string>("batman");
  const [searchId, setSearchId] = useState<number>(70);
  const [heroInfo, setHeroInfo] = useState<HeroInfo>(Object);
  const [bgColor1, setBgColor1] = useState<string>("from-blue-100");
  const [bgColor2, setBgColor2] = useState<string>("via-yellow-200");
  const [bgColor3, setBgColor3] = useState<string>("to-blue-100");
  const [infoSelection, setInfoSelection] = useState<string>("description");
  
  const searchHeroes = (searchValue: string) => {
    if (searchValue === null || searchValue === "") {
      setSearch("a")
    } else {
      setSearch(searchValue)
    }
    console.log(searchValue)
  }

  //Search Hero Pool
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

  //Search Individual Hero
  useEffect(() => {
    const fetchHeroInfo = async () => {
      try {
        let API_HERO_CALL = `https://www.superheroapi.com/api.php/${API_KEY}/${searchId}`
        const response = await fetch(API_HERO_CALL);
        const data = await response.json();
        console.log("API Data", data)
        setHeroInfo(data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } 

      // finally {
      //   setLoading(false);
      // }
    };
    fetchHeroInfo();
  }, [searchId]);

  //Change gradient color with alignment
  useEffect(() => {
    console.log(heroInfo?.biography?.alignment)
    if (heroInfo?.biography?.alignment === "good") {
      setBgColor1("from-blue-100");
      setBgColor2("via-gray-100");
      setBgColor3("to-blue-100");
    } else if (heroInfo?.biography?.alignment === "neutral") {
      setBgColor1("from-orange-100");
      setBgColor2("via-gray-100");
      setBgColor3("to-orange-100");
    } else if (heroInfo?.biography?.alignment === "bad") {
      setBgColor1("from-red-100");
      setBgColor2("via-gray-100");
      setBgColor3("to-red-100");
    } else {
      setBgColor1("from-green-400");
      setBgColor2("via-rose-500");
      setBgColor3("to-green-400");
    }
  }, [heroInfo?.biography?.alignment]);

  //if (isLoading) return <p>Loading...</p>;

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

  const handleSectionClick = (info: string) => {
    setInfoSelection(info);
  }

  return (
    <div className={`bg-gradient-to-r ${bgColor1} ${bgColor2} ${bgColor3}`}>
      <h1 className="text-center py-2">Heroes & Villains </h1>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <input type="text" 
          className="m-2 rounded-lg pl-2"
          value={searchString} 
          onChange={handleInputChange} 
          placeholder=" Hero search"/>
          <button 
          className="bg-white rounded-full p-1"
          type="submit"><SearchIcon></SearchIcon>
          </button>
        </form>
      </div>
      <div className="overflow-scroll">
        <ul className='flex scroll-smooth text-center p-4 my-4'>
          {heroes.map(hero => 
          <li 
            key={hero.id} 
            className="column mx-2 flex-none transition-transform transform hover:scale-125" 
            onClick={() => setSearchId(hero.id)} >
              <div className="size-32 rounded-full overflow-hidden">
                <img className="content-cover" src={hero.image.url}/>
              </div>
              {hero.name}
            </li>)}
        </ul>
      </div>
      <div className="text-center text-3xl font-bold">
        {heroInfo.name}
      </div>
      <div className="flex flex-row md: flex-wrap wrap justify-center m-3">
        <div>
          <img src={heroInfo?.image?.url} className="w-72 h-full justify-center mx-1" />
        </div>
        <div className="p-2 mx-1">
          <div className="flex flex-row">
            <div className="w-1/3 text-center mx-0.5 rounded-lg border-2 border-black bg-blue-200 hover:bg-blue-400" onClick={() => handleSectionClick("description")} >Description
            </div>
            <div className="w-1/3 text-center mx-0.5 rounded-lg border-2 border-black bg-blue-200 hover:bg-blue-400" onClick={() => handleSectionClick("stats")}>Stats
            </div>
            <div className="w-1/3 text-center mx-0.5 rounded-lg border-2 border-black bg-blue-200 hover:bg-blue-400" onClick={() => handleSectionClick("background")}>Background
            </div>
          </div>
          <HeroInformation selection={infoSelection} heroInfo={heroInfo}/>
          {/* {heroInfo?.biography && <text>{heroInfo.biography["full-name"]}</text>} */}
        </div>
      </div>



    </div>
  );
};

export default DataComponent;
