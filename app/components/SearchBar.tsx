import React, { useState, FormEvent} from "react";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import SearchBarProps from "../Interfaces/SearchBarPropsInterface";

const SearchBar: React.FC<SearchBarProps> = ({setSearch, searchString, setSearchString}) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (searchString === null || searchString === "") {
          console.log("No search Parameter set");
        } else {
        setSearch(searchString.trim());
        }
      }

      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchString(event.target.value);
        console.log(searchString);
      }

      class SearchIcon extends React.Component {
        render() {
          return <PiMagnifyingGlassLight />
        }
      }
    return(
      <div className="flex justify-center mb-2">
        <form onSubmit={handleSubmit}>
          <input type="text" 
          className="m-2 rounded-lg pl-2 border-2 border-zinc-950"
          value={searchString} 
          onChange={handleInputChange} 
          placeholder=" Hero search"/>
          <button 
          className="bg-white rounded-full border-2 border-zinc-950 p-1 relative top-0.5"
          type="submit"><SearchIcon></SearchIcon>
          </button>
        </form>
      </div>
    );
}

export default SearchBar;