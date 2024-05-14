export default function HeroInformation({selection, heroInfo}) {
    if (selection === "description") {
        return (
            <div className="flex flex-column  p-2 mt-2">
                <div className="flex flex-row">            
                    <div className="flex-column min-w-44">
                        <div>
                            <strong>Gender:</strong> {heroInfo?.appearance?.gender}
                        </div>
                        <div>
                            <strong>Height:</strong> {heroInfo?.appearance?.height[0]}, {heroInfo?.appearance?.height[1]}
                        </div>
                        <div>
                            <strong>Eye-color:</strong> {heroInfo?.appearance["eye-color"]}
                        </div>
                    </div>
                    <div className="min-w-44">
                        <div>
                            <strong>Race:</strong> {heroInfo?.appearance?.race}
                        </div>
                        <div>
                            <strong>Weight:</strong> {heroInfo?.appearance?.weight[0]}, {heroInfo?.appearance?.weight[1]}
                        </div>
                        <div>
                            <strong>Hair-color</strong> {heroInfo?.appearance["hair-color"]}
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
            <div>stats page</div>
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