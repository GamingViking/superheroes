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
        <div className="flex flex-row md: flex-wrap wrap justify-center m-3 bg-[#5a2158] border-2 border-[#09040b] rounded-lg">
            <div>
            <img src={heroInfo?.image?.url} className="w-72 h-full justify-center mx-1" />
            </div>
            <div className="p-2 mx-1 w-96 text-white">
                <div className="flex flex-row">
                    <InfoButton handleSectionClick={handleSectionClick} selection="Description"/>
                    <InfoButton handleSectionClick={handleSectionClick} selection="Stats"/>
                    <InfoButton handleSectionClick={handleSectionClick} selection="Background"/>
                </div>
                <HeroInformation selection={infoSelection} heroInfo={heroInfo} intelligence={intelligence} strength={strength} speed={speed} durability={durability} power={power} combat={combat} aliases={aliases}/>
            </div>
        </div>
    );
}

export default HeroInfoContainer;