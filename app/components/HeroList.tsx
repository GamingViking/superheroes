import React, { useEffect, useRef } from "react";
import HeroListProps from "../Interfaces/HeroListPropsInterface";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const HeroList: React.FC<HeroListProps> = ({ heroes, setSearchId, isLoading }) => {
  useEffect(() => {
    document.getElementById('content')?.scrollTo({left: 0})
  }, [heroes]);
  
  const handleClick = (direction: string) => {
    const scrollAmount = 144;
    document.getElementById('content')?.scrollBy({ left: direction === 'right' ? scrollAmount : -scrollAmount, behavior: "smooth"});
  }
    return(
        <div className="flex justify-center mb-2">
          <div className="flex w-1/12 justify-center transition-transform transform hover:scale-125" onClick={() => {handleClick("left")}}><IoIosArrowBack className="self-center size-10 "/></div>
          {isLoading ? (
            <div className="h-24 w-5/6 border-2 border-zinc-950 rounded-lg bg-white flex items-center justify-center">
              <h2>Now Loading: </h2>
              <img className="h-8 w-8 ml-2" src={"./images/Moving blocks.gif"} alt="loading..." />
            </div>
            ) : (  
          <div className="w-5/6 border-2 border-zinc-950 rounded-lg bg-fuchsia-950 text-white">
            <div id="content" className="justify-start overflow-scroll flex flex-col no-scrollbar">  
              <ul className="text-center p-4 my-4 whitespace-nowrap">
                {heroes ? heroes.map(hero => 
                <li 
                  key={hero.id} 
                  className="inline-block mx-2 transition-transform transform hover:scale-125" 
                  onClick={() => setSearchId(hero.id)} >
                    <div className="size-32 rounded-full overflow-hidden">
                      <img className="content-cover" src={hero.image.url} alt={`${hero.name} image`} />
                    </div>
                    {hero.name}
                  </li>) : <text>No heroes or villains by that name found</text>}
              </ul>
            </div>
            <div className="flex text-xs font-thin justify-center">Shift + Mousewheel to scroll</div>
          </div>
          )}
          <div className="flex w-1/12 justify-center transition-transform transform hover:scale-125" onClick={() => {handleClick("right")}}><IoIosArrowForward className="self-center size-10"/></div>
        </div>
    );
}

export default HeroList;