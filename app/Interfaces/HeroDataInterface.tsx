interface HeroData {
    powerstats: {
      intelligence: string;
      strength: string;
      speed: string;
      durability: string;
      power: string;
      combat: string;
    }
      id: number;
      name: string;
      image: {
        url: string;
      }
    }

export default HeroData;