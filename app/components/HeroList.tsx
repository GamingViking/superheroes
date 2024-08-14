import React from "react";
import HeroListProps from "../Interfaces/HeroListPropsInterface";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const HeroList: React.FC<HeroListProps> = ({ heroes, setSearchId }) => {
  const handleClick = (direction: string) => {
    const scrollAmount = 144;
    document.getElementById('content')?.scrollBy({ left: direction === 'right' ? scrollAmount : -scrollAmount, behavior: "smooth"});
  }
    return(
        <div className="flex justify-center">
          <div className="flex w-1/12 justify-center" onClick={() => {handleClick("left")}}><IoIosArrowBack className="self-center size-10"/></div>
          <div id="content" className="overflow-scroll flex w-5/6 border-2 border-[#ff73b0] rounded-lg bg-[#0ed0dc]">
            <ul className='flex scroll-smooth text-center p-4 my-4 justify-center'>
              {heroes ? heroes.map(hero => 
              <li 
                key={hero.id} 
                className="column mx-2 flex-none transition-transform transform hover:scale-125" 
                onClick={() => setSearchId(hero.id)} >
                  <div className="size-32 rounded-full overflow-hidden">
                    <img className="content-cover" src={hero.image.url}/>
                  </div>
                  {hero.name}
                </li>) : <text>No heroes or villains by that name found</text>}
            </ul>
          </div>
          <div className="flex w-1/12 justify-center" onClick={() => {handleClick("right")}}><IoIosArrowForward className="self-center size-10"/></div>
        </div>
    );
}

export default HeroList;