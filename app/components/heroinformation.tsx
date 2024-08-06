import { PiSword } from "react-icons/pi";
import { LuBrain } from "react-icons/lu";
import { TbShoe } from "react-icons/tb";
import { BsShield } from "react-icons/bs";
import { SlEnergy } from "react-icons/sl";
import { MdSportsMartialArts } from "react-icons/md";
import { BsBarChartLine } from "react-icons/bs";
import Powerstat from "./Powerstat";

interface HeroInfo {
    powerstats: {
        intelligence: string;
        strength: string;
        speed: string;
        durability: string;
        power: string;
        combat: string;
    }
    biography: {
      "full-name": string;
      publisher: string;
      alignment: string;
      "place-of-birth": string;
      "first-appearance": string;
      "alter-egos": string;
      aliases: string[];
    }
    work: {
        occupation: string;
        base: string;
    }
    connections: {
        "group-affiliation": string;
        relatives: string;
    }
    appearance: {
        gender: string;
        race: string;
        height: string[];
        weight: string[];
        "eye-color": string;
        "hair-color": string;
    }
    id: number;
    name: string;
    image: {
      url: string;
    }
  }

  interface HeroInformationProps {
      selection: string;
      heroInfo: HeroInfo;
      intelligence: number;
      strength: number;
      speed: number;
      durability: number;
      power: number;
      combat: number;
      aliases: string;
    }
    
    export default function HeroInformation({selection, heroInfo, intelligence, strength, speed, durability, power, combat, aliases }:HeroInformationProps) {

    if (selection === "description") {
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
                <div className="flex flex-row">            
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
    } else if (selection === "stats") {
        return (
            <div className="mt-4">
                <Powerstat powerstat={intelligence} statname="intelligence" icon={<LuBrain className="mt-2"/>}/>
                <Powerstat powerstat={strength} statname="strength" icon={<PiSword className="mt-2"/>}/>
                <Powerstat powerstat={speed} statname="speed" icon={<TbShoe className="mt-2"/>}/>
                <Powerstat powerstat={durability} statname="durability" icon={<BsShield className="mt-2"/>}/>
                <Powerstat powerstat={power} statname="power" icon={<SlEnergy className="mt-2"/>}/>
                <Powerstat powerstat={combat} statname="combat" icon={<MdSportsMartialArts className="mt-2"/>}/>
                <Powerstat powerstat={Math.round((intelligence + strength + speed + durability + power + combat) / 6)} statname="average" icon={<BsBarChartLine className="mt-2"/>}/>
            </div>
        );
    } else if (selection === "background") {
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
    } else {
        return (
            <div>
                <div>No information available</div>
                <div>{heroInfo?.name}</div>
            </div>
        );
    }
}