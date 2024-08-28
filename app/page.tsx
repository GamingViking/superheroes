//Making responsive designs with Tailwind - flex none
//Rounded input field cutting off first letter - add padding to element
//Remove/style scrollbar- hidden with a style in globalcss
//serach icon adjustment - relative positioning
//Tailwind shorthand intellisense showing up - add spaces, hope for the best
// Handle searching names that aren't included - conditionally render heroes (turnary operator of &&)
//Using variables in a className? - pass an object with string interpolation
//Currently grabbing previous hero's aligment for display - useEffect hook updating on alignment
//Sizing not working? i.e. 1/2 - define absolute units.
//Change class components to functional components - icons?
//Componentize elements - for bulk components
//What should be inside of DataComponent?
//Center list of heroes? - look at the right component.
//Sidescolling options/appearance? - media queries/scrolling - md:overflow-y-auto
//How to type props for components correctly? - could shorthand with specific components
//Variable scale of power level displayed? - sick gradient overlay #z-index and variable div size
//stat name appearing over gray section of bar - setting position absolute/relative sets a new z-index stack
//handling math on stats coming from API as strings - initial interface declares as strings, parseInt into new variables with setter functions, then pass new variables as numbers via new interface
//passing an icon as a prop? - pass whole icon as an object, declare in interface as ReactElement
//Carousel/infinitely scrolling selection? - intersection observer API? determine element visibility threshold (instead bound the selection with non-looping scrollable component)
//One useEffect for all stats? - now functioning as intended!
//stat bar crunching on smaller window size (when no stats given for hero) - Space after : from icon? - enlarged containing div to account for increased size of NAN
//Conditional render check against specific fields in the object in question - thing?.thing2["thing-3"]
//different page for tsx type declarations - done for all but really small declarations (powerstat.tsx)
//Separate/abstract logic so that not too much is in one component (separate components for each building block/display piece)
//caching in various forms? - cache main page with a third party application like Redis (likely overkill for a single page)
//Bind HeroList so it stays on screen - threw a container on it

//How to keep API call server side with useState/useEffect being client side?
//Aesthetic improvements?
//Bolding part of text, not tailwindy?
//Hiding API key in github? Best way to deploy?
//Transparent div to block out content? Impossible?
//Separate aliases with a comma - state altering solution for this? (went with a join statement)
//HeroInfoPassingProps interface for passing props?

//Write unit tests (aka learn how to write unit tests)
//get code into a test environment (some type of production build - can make url hard to access)

//starting heroes cut off if using an incomplete name search, i.e. search "o"
//Hero list starts at the same scroll location with different searches
//Hero stat NAN on a different line from icon for mobile (CatII)
//pass props more efficiently - not individually named (article - spread operator?)
//Media query size differences for mobile, normal, and large screens?
//Add custom colors to tailwind library for convenient/repeated use - make variables?
//Extract left/right scroll arrows into separate components?
//Change amount of color distribution in background gradient?
//loading display for slower computers/(low-mid throttle)
//Awkward pixel-specific screen size set in themes for md media query

'use client'

import React, { useEffect, useState, useRef } from 'react';
import HeroInfo from './Interfaces/HeroInfoInterface';
import HeroData from './Interfaces/HeroDataInterface';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import HeroList from './components/HeroList';
import HeroName from './components/HeroName';
import HeroInfoContainer from './components/HeroInfoContainer';

const API_KEY = "a34d3ae98eaa808e2d1975f5382ed007";

const DataComponent: React.FC = () => {
  const [heroes, setHeroes] = useState<HeroData[]>([]);
  // const [isLoading, setLoading] = useState<boolean>(true);
  const [searchString, setSearchString] = useState<string>("");
  const [search, setSearch] = useState<string>("batman");
  const [searchId, setSearchId] = useState<number>(70);
  const [heroInfo, setHeroInfo] = useState<HeroInfo>(Object);
  const [bgColor1, setBgColor1] = useState<string>("from-zinc-950");
  const [bgColor2, setBgColor2] = useState<string>("via-pink-400");
  const [bgColor3, setBgColor3] = useState<string>("to-zinc-950");
  const [intelligence, setintelligence] = useState<number>(0);
  const [strength, setstrength] = useState<number>(0);
  const [speed, setspeed] = useState<number>(0);
  const [durability, setdurability] = useState<number>(0);
  const [power, setpower] = useState<number>(0);
  const [combat, setcombat] = useState<number>(0);
  const [aliases, setaliases] = useState<string>("");
  const heroListScrollLocationRef = useRef<HTMLDivElement | null>(null);

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
      setBgColor1("from-sky-700");
      setBgColor2("via-cyan-400");
      setBgColor3("to-sky-700");
    } else if (heroInfo?.biography?.alignment === "neutral") {
      setBgColor1("from-cyan-400");
      setBgColor2("via-pink-400");
      setBgColor3("to-cyan-400");
    } else if (heroInfo?.biography?.alignment === "bad") {
      setBgColor1("from-pink-800");
      setBgColor2("via-pink-400");
      setBgColor3("to-pink-800");
    } else {
      setBgColor1("from-zinc-950");
      setBgColor2("via-pink-400");
      setBgColor3("to-zinc-950");
    }
  }, [heroInfo?.biography?.alignment]);

  useEffect(() => {
    setintelligence(parseInt(heroInfo?.powerstats?.intelligence));
    setstrength(parseInt(heroInfo?.powerstats?.strength));
    setspeed(parseInt(heroInfo?.powerstats?.speed));
    setdurability(parseInt(heroInfo?.powerstats?.durability));
    setpower(parseInt(heroInfo?.powerstats?.power));
    setcombat(parseInt(heroInfo?.powerstats?.combat));
    console.log("intelligence is ", intelligence);
    console.log("strength is ", strength);
  }, [heroInfo?.powerstats])

  useEffect(() => {
    const aliasString = "";
    // heroInfo?.biography?.aliases.forEach(element => {
    //   setaliases(element + ", ");
    // });
    setaliases(heroInfo?.biography?.aliases.join(", "));
  }, [heroInfo?.biography])

  //if (isLoading) return <p>Loading...</p>;

  return (
    <div className={`bg-gradient-to-r ${bgColor1} ${bgColor2} ${bgColor3}`} style={{paddingBottom: 10}}>
      <Title/>
      <SearchBar search={search} setSearch={setSearch} searchString={searchString} setSearchString={setSearchString}/>
      <HeroList heroes={heroes} setSearchId={setSearchId}/>
      <HeroName heroInfo={heroInfo}/>
      <HeroInfoContainer heroInfo={heroInfo} intelligence={intelligence} strength={strength} speed={speed} durability={durability} power={power} combat={combat} aliases={aliases}/>
    </div>
  );
};

export default DataComponent;
