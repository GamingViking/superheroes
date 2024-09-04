import HeroData from "./HeroDataInterface";

interface HeroListProps {
    heroes: HeroData[];
    setSearchId: (value: number) => void;
    isLoading: boolean;
}

export default HeroListProps;