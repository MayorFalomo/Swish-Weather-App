import React, { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { FiSun } from "react-icons/fi";
import { StyledNav } from "./Nav.styled";
import { Menubar } from "./Nav.styled";
import { Searchbar } from "./Nav.styled";
import { AppContext } from "../Helper/Context";
import { BsFillMoonFill } from "react-icons/bs";

export const Navbar = () => {
  const { searchInput, setSearchInput, fetchWeather, theme, setTheme } =
    useContext(AppContext);

  // Send input value
  const handleChange = (e: any) => {
    setSearchInput(e.target.value);
  };

  //Submit input value
  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetchWeather(searchInput);
  };

  //Handle Lighting
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <StyledNav theme={theme}>
      <nav>
        <h2>SWISH. </h2>
        <Menubar>
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
