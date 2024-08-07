import HeroInfo from "./HeroInfoInterface";

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

  export default HeroInformationProps;