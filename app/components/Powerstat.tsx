
import React, { ReactElement } from "react";
import PowerstatProps from "../Interfaces/PowerstatProps";

const Powerstat: React.FC<PowerstatProps> = ({ powerstat, statname, icon }) => {
    return (
        <div className="mt-1 relative flex flex-row">                 
            <div className="w-[25%] relative flex flex-row">
                <div>{icon}</div>
                <div className="mt-1 mr-1">: {powerstat}</div>
            </div>
            <div className="w-full flex-shrink h-8 flex flex-row justify-end bg-gradient-to-r from-yellow-200 via-orange-400 to-red-500">
                <div className="z-10 absolute p-1">{statname}</div>
                <div className={`relative h-8  bg-slate-400`} style={{width: `${100 - powerstat}%`}}></div>
            </div>
        </div>
    );
};

export default Powerstat;