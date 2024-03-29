import React, { useContext, } from "react";
import { CiSearch } from "react-icons/ci";
import { FiSun } from "react-icons/fi";
import { Convert, StyledNav } from "./Nav.styled";
import { Menubar } from "./Nav.styled";
import { Searchbar } from "./Nav.styled";
import { AppContext } from "../Helper/Context";
import { BsFillMoonFill } from "react-icons/bs";
import { ImSearch } from "react-icons/im"
import CountriesList from "../CountriesList/CountriesList";

export const Navbar = () => {

  const { searchInput, setSearchInput,country, fetchWeather,fetchCountry, theme, setTheme, currentUnit, setCurrentUnit } =
    useContext(AppContext);

  const [searchText, setSearchText] = React.useState("");
  
  // Send input value
  const handleChange = (e: any) => {
    console.log(searchInput);
    setSearchInput(e.target.value);
  };

  // console.log(country);
  

  //Function to Submit input value
  const handleSubmit = (e: any) => {
    e.preventDefault();
    //FetchWeather takes in a parameter called searchInput which is whatever we type
    fetchWeather(searchInput);
    //FetchCountry takes in a parameter called SearchInput which gets called when  we submit.
    fetchCountry(searchInput);
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
      <nav >
      <div className="NavContainer"  >
        <h2>SWISH. </h2>
        <Menubar>
           <Convert>
            <select onClick={convert} >
              <option value={Math.floor(country.main?.temp) + '\u00b0C'} >Celsius </option>
              <option value={Math.floor(country.main?.temp + 273.15) + '\u00b0K'} > Kevin </option>
              <option value={Math.floor((country.main?.temp * 9/5) + 32) + '\u00b0F' } > Farenheit </option>
            </select>
          </Convert>
          <Searchbar>
            <form
              style={{
                display: "flex",
                alignItems: "center",
                width: "300px",
                overflow: "hidden",
                gap: "0.5rem",
              }}
              onSubmit={handleSubmit}
            >
              <input
                // value={searchText}
                onChange={(e) => setSearchInput(e.target.value)}
                // onChange={handleChange}
                // onClickCapture={() => setPressed(true)}
                placeholder="Enter The Country..."
                type="text"
                // required
                style={{
                  width: "90%",
                  textTransform: "capitalize",
                }}
              />
              <button
                // onClick={(e) => handleSubmit(e)}
                style={{
                  display: "grid",
                  placeContent: "center",
                  padding: "0.5rem",
                  cursor: "pointer",
                }}
              >
                <ImSearch className="search-ico" style={{ fontSize: "1.2rem", fontWeight: "800" }} />
              </button> 
            </form>
            {searchText?.length !== 0 && (
              <CountriesList
                searchText={searchText}
                setSearchText={setSearchText}
                setSearchInput={setSearchInput}
                // setPressed={setPressed}
              />
            )}
          </Searchbar>
          {theme === "dark" ? (
            <p onClick={() => toggleTheme()} style={{ cursor: "pointer" }}>
              <BsFillMoonFill />
            </p>
          ) : (
            <p onClick={() => toggleTheme()} style={{ cursor: "pointer" }}>
              <FiSun />
            </p>
          )}
        </Menubar>
        </div>
        </nav>
    </StyledNav>
  );
};
