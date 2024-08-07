import React from "react";
import DescriptionProps from "../Interfaces/DescriptionPropsInterface";

const Description: React.FC<DescriptionProps> = ({ heroInfo, aliases }) => {
    return (
        <div className="flex flex-col  p-2 mt-2 bg-yellow-400">
            <div>
                {heroInfo?.biography && <text><strong>Full-Name: </strong>{heroInfo?.biography["full-name"]}</text>}
            </div>
            <div>
                {heroInfo?.biography && <text><strong>Alter-Egos: </strong>{heroInfo?.biography["alter-egos"]}</text>}
            </div>
            <div>
                {heroInfo?.biography && <text><strong>Aliases: </strong>{aliases}</text>}
            </div>
            <div className="flex flex-row mt-5">            
                <div className="flex-col basis-1/2 bg-red-400">
                    <div>
                        <strong>Gender:</strong> {heroInfo?.appearance?.gender}
                    </div>
                    <div>
                        <strong>Height:</strong> {heroInfo?.appearance?.height[0]}, {heroInfo?.appearance?.height[1]}
                    </div>
                    <div>
                        {heroInfo?.appearance && <text><strong>Eye-color:</strong> {heroInfo.appearance["eye-color"]}</text>}
                    </div>
                </div>
                <div className="basis-1/2 bg-green-400">
                    <div>
                        <strong>Race:</strong> {heroInfo?.appearance?.race}
                    </div>
                    <div>
                        <strong>Weight:</strong> {heroInfo?.appearance?.weight[0]}, {heroInfo?.appearance?.weight[1]}
                    </div>
                    <div>
                        {heroInfo?.appearance && <text><strong>Hair-color:</strong> {heroInfo.appearance["hair-color"]}</text>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Description;