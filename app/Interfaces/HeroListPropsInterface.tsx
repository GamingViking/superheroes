import HeroData from "./HeroDataInterface";

interface HeroListProps {
    heroes: HeroData[];
    setSearchId: (value: number) => void;
}

export default HeroListProps;