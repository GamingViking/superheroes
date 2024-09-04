'use client'

import React, { useEffect, useState } from 'react';
import HeroInfo from './Interfaces/HeroInfoInterface';
import HeroData from './Interfaces/HeroDataInterface';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import HeroList from './components/HeroList';
import HeroName from './components/HeroName';
import HeroInfoContainer from './components/HeroInfoContainer';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const DataComponent: React.FC = () => {
  const [heroes, setHeroes] = useState<HeroData[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
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

  //Search Hero Pool - by hero name
  useEffect(() => {
    const fetchData = async () => {
      try {
        let API_CALL = `https://www.superheroapi.com/api.php/${API_KEY}/search/${search}`
        const response = await fetch(API_CALL);
        const data = await response.json();
        setHeroes(data.results);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } 
      finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [search]);

  //Search Individual Hero - by hero ID
  useEffect(() => {
    const fetchHeroInfo = async () => {
      try {
        let API_HERO_CALL = `https://www.superheroapi.com/api.php/${API_KEY}/${searchId}`
        const response = await fetch(API_HERO_CALL);
        const data = await response.json();
        setHeroInfo(data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } 
      finally {
        setLoading(false);
      }
    };
    fetchHeroInfo();
  }, [searchId]);

  //Change gradient color with alignment
  useEffect(() => {
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

  //Cleaning data returned from API - converting numberical strings to numbers
  useEffect(() => {
    setintelligence(parseInt(heroInfo?.powerstats?.intelligence));
    setstrength(parseInt(heroInfo?.powerstats?.strength));
    setspeed(parseInt(heroInfo?.powerstats?.speed));
    setdurability(parseInt(heroInfo?.powerstats?.durability));
    setpower(parseInt(heroInfo?.powerstats?.power));
    setcombat(parseInt(heroInfo?.powerstats?.combat));
  }, [heroInfo?.powerstats])

  //Cleaning data returned from API - commas added between aliases
  useEffect(() => {
    setaliases(heroInfo?.biography?.aliases.join(", "));
  }, [heroInfo?.biography])

  return (
    <div className={`bg-gradient-to-r ${bgColor1} ${bgColor2} ${bgColor3}`} style={{paddingBottom: 10}}>
      <Title/>
      <SearchBar search={search} setSearch={setSearch} searchString={searchString} setSearchString={setSearchString}/>
      <HeroList heroes={heroes} isLoading={isLoading} setSearchId={setSearchId}/>
      <HeroName heroInfo={heroInfo}/>
      <HeroInfoContainer heroInfo={heroInfo} intelligence={intelligence} strength={strength} speed={speed} durability={durability} power={power} combat={combat} aliases={aliases}/>
    </div>
  );
};

export default DataComponent;
