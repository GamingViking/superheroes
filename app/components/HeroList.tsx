import React, { useEffect, useState } from "react";
import HeroListProps from "../Interfaces/HeroListPropsInterface";

const HeroList: React.FC<HeroListProps> = ({ heroes, setSearchId }) => {
    return(
        <div className="overflow-scroll">
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
    );
}

export default HeroList;