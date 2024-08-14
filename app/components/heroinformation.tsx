import { PiSword } from "react-icons/pi";
import { LuBrain } from "react-icons/lu";
import { TbShoe } from "react-icons/tb";
import { BsShield } from "react-icons/bs";
import { SlEnergy } from "react-icons/sl";
import { MdSportsMartialArts } from "react-icons/md";
import { BsBarChartLine } from "react-icons/bs";
import Powerstat from "./Powerstat";
import Description from "./Description";
import Background from "./Background";
import HeroInformationProps from "../Interfaces/HeroInformationProps";
    
const HeroInformation: React.FC<HeroInformationProps> = ({ selection, heroInfo, intelligence, strength, speed, durability, power, combat, aliases }) => {
    if (selection === "description") {
        return (
            <Description heroInfo={heroInfo} aliases={aliases}/>
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
            <Background heroInfo={heroInfo}/>
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

export default HeroInformation;