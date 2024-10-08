import React, { useState } from "react";
import HeroInformation from "./HeroInformation";
import HeroInfoContainerProps from "../Interfaces/HeroInfoContainerProps.tsx";
import InfoButton from "./InfoButton";

const HeroInfoContainer: React.FC<HeroInfoContainerProps> = ({ heroInfo, aliases, intelligence, strength, speed, durability, power, combat }) => {
    const [infoSelection, setInfoSelection] = useState<string>("Description");

    const handleSectionClick = (info: string) => {
        setInfoSelection(info);
      }

    return(
        <div className="flex flex-col items-center md:items-start md:justify-center md:flex-row m-3 bg-fuchsia-950 border-2 border-zinc-950 rounded-lg md:h-96">
            {heroInfo?.image?.url && 
                <div className="justify-center mx-1">
                <img src={heroInfo?.image?.url} alt={`${heroInfo.name} enlarged image`} className="object-cover w-72 h-[380px]" fetchPriority="high"/>
                </div>} 
            <div className="p-2 mx-1 xs:w-96 w-80 text-white">
                <div className="flex flex-row">
                    <InfoButton handleSectionClick={handleSectionClick} selection="Description"/>
                    <InfoButton handleSectionClick={handleSectionClick} selection="Stats"/>
                    <InfoButton handleSectionClick={handleSectionClick} selection="Background"/>
                </div>
                <div className="mt-2 md:max-h-80 md:overflow-y-auto">
                    <HeroInformation selection={infoSelection} heroInfo={heroInfo} intelligence={intelligence} strength={strength} speed={speed} durability={durability} power={power} combat={combat} aliases={aliases}/>
                </div>
            </div>
        </div>
    );
}

export default HeroInfoContainer;