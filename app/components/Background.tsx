import React from "react";
import HeroInfo from "../Interfaces/HeroInfoInterface";
import HeroInfoPassingProps from "../Interfaces/HeroInfoPassingProps";

const Background: React.FC<HeroInfoPassingProps> = ({ heroInfo }) => {
    return (
        <div className="p-2 mt-2">
            <div>
                {heroInfo?.biography && <text><strong>Birthplace: </strong>{heroInfo?.biography["place-of-birth"]}</text>}
            </div>
            <div>
                {heroInfo?.biography && <text><strong>First appearance: </strong>{heroInfo?.biography["first-appearance"]}</text>}
            </div>
            <div>
                {heroInfo?.biography && <text><strong>Publisher: </strong>{heroInfo?.biography?.publisher}</text>}
            </div>
            <div>
                {heroInfo?.work && <text><strong>Occupation: </strong>{heroInfo?.work.occupation}</text>}
            </div>
            <div>
                {heroInfo?.work && <text><strong>Base: </strong>{heroInfo?.work.base}</text>}
            </div>
            <div>
                {heroInfo?.connections && <text><strong>Group-Affiliation: </strong>{heroInfo?.connections["group-affiliation"]}</text>}
            </div>
            <div>
                {heroInfo?.connections && <text><strong>Relatives: </strong>{heroInfo?.connections.relatives}</text>}
            </div>
        </div>
    );
}

export default Background;