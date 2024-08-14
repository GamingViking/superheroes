import HeroInfo from "./HeroInfoInterface";

interface HeroStatProps {
    heroInfo: HeroInfo;
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
    aliases: string;
  }

  export default HeroStatProps;