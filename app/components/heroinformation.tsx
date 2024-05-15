import { PiSwordDuotone } from "react-icons/pi";

interface HeroInfo {
    powerstats: number[];
    biography: {
      "full-name": string;
      publisher: string;
      alignment: string;
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
  }

export default function HeroInformation({selection, heroInfo}:HeroInformationProps) {
    if (selection === "description") {
        return (
            <div className="flex flex-col  p-2 mt-2 bg-yellow-400">
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

                {/* <div>                   
                    <div>Height: {heroInfo?.appearance?.height[0]},</div>
                    <div>{heroInfo?.appearance?.height[1]}</div>
                </div> */}
            </div>
        );
    } else if (selection === "stats") {
        return (
            <div>
                <div><PiSwordDuotone />: 12 </div>
                <div></div>
            </div>
        );
    } else if (selection === "background") {
        return (
            <div>hey hey hey background</div>
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