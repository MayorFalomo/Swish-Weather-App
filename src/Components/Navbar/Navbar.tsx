import React, { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiSun } from "react-icons/fi";
import { Convert, StyledNav } from "./Nav.styled";
import { Menubar } from "./Nav.styled";
import { Searchbar } from "./Nav.styled";
import { AppContext } from "../Helper/Context";
import { BsFillMoonFill } from "react-icons/bs";

export const Navbar = () => {

  const { searchInput, setSearchInput,country,setCountry, fetchWeather, theme, setTheme, currentUnit, setCurrentUnit } =
    useContext(AppContext);

  // Send input value
  const handleChange = (e: any) => {
    setSearchInput(e.target.value);
  };

  // console.log(country);
  

  //Submit input value
  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetchWeather(searchInput);
  };

  //Handle Lighting
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const convert = (e: any) => {
    setCurrentUnit(e.target.value)
  }

 

  return (
    <StyledNav theme={theme}>
      <nav>
        <h2>SWISH. </h2>
        <Menubar>
          <Convert>
            <select onClick={convert} >
              <option value={(country.main?.temp) + '\u00b0C'} >Celsius </option>
              <option value={(country.main?.temp + 273.15) + '\u00b0K'} > Kevin </option>
              <option value={((country.main?.temp * 9/5) + 32) + '\u00b0F' } > Farenheit </option>
            </select>
          </Convert>
          <Searchbar>
            <form>
              <input
                onChange={handleChange}
                placeholder="Enter The Country"
                type="text"
              />
              <button onClick={(e) => handleSubmit(e)} type="submit">
                {<CiSearch />}{" "}
              </button>
            </form>
          </Searchbar>
          {theme === "dark" ? (
            <p onClick={() => toggleTheme()}>
              <BsFillMoonFill />
            </p>
          ) : (
            <p onClick={() => toggleTheme()}>
              <FiSun />
            </p>
          )}
        </Menubar>
      </nav>
    </StyledNav>
  );
};
