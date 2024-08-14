import React from "react";
import InfoButtonProps from "../Interfaces/InfoButtonInterface";

const InfoButton: React.FC<InfoButtonProps> = ({ handleSectionClick, selection }) => {
    return(
        <div className="w-1/3 text-center mx-0.5 rounded-lg border-2 border-black bg-blue-200 hover:bg-blue-400" onClick={() => handleSectionClick(selection)} >{selection}
        </div>
    );
}

export default InfoButton;