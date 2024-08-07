import React from "react";
import HeroInfoPassingProps from "../Interfaces/HeroInfoPassingProps";

const HeroName: React.FC<HeroInfoPassingProps> = ({ heroInfo }) => {
    return(
        <div className="text-center text-3xl font-bold">
            {heroInfo.name}
        </div>
    );
}

export default HeroName;