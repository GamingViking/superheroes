import React, { useState } from "react";
import HeroInformation from "./HeroInformation";
import HeroInfoContainerProps from "../Interfaces/HeroInfoContainerProps.tsx";

const HeroInfoContainer: React.FC<HeroInfoContainerProps> = ({ heroInfo, aliases, intelligence, strength, speed, durability, power, combat }) => {
    const [infoSelection, setInfoSelection] = useState<string>("description");

    const handleSectionClick = (info: string) => {
        setInfoSelection(info);
      }

    return(
        <div className="flex flex-row md: flex-wrap wrap justify-center m-3">
            <div>
            <img src={heroInfo?.image?.url} className="w-72 h-full justify-center mx-1" />
            </div>
            <div className="p-2 mx-1 w-96">
            <div className="flex flex-row">
                <div className="w-1/3 text-center mx-0.5 rounded-lg border-2 border-black bg-blue-200 hover:bg-blue-400" onClick={() => handleSectionClick("description")} >Description
                </div>
                <div className="w-1/3 text-center mx-0.5 rounded-lg border-2 border-black bg-blue-200 hover:bg-blue-400" onClick={() => handleSectionClick("stats")}>Stats
                </div>
                <div className="w-1/3 text-center mx-0.5 rounded-lg border-2 border-black bg-blue-200 hover:bg-blue-400" onClick={() => handleSectionClick("background")}>Background
                </div>
            </div>
            <HeroInformation selection={infoSelection} heroInfo={heroInfo} intelligence={intelligence} strength={strength} speed={speed} durability={durability} power={power} combat={combat} aliases={aliases}/>
            </div>
        </div>
    );
}

export default HeroInfoContainer;