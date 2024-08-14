import React from "react";
import InfoButtonProps from "../Interfaces/InfoButtonInterface";

const InfoButton: React.FC<InfoButtonProps> = ({ handleSectionClick, selection }) => {
    return(
        <div className="w-1/3 text-center mx-0.5 rounded-lg border-2 border-[#09040b] bg-[#8e0056] hover:bg-[#ff73b0]" onClick={() => handleSectionClick(selection)} >{selection}
        </div>
    );
}

export default InfoButton;