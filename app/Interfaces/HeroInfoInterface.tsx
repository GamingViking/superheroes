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

  export default HeroInfo;