// import React, { useContext } from "react";
// import { ImSearch } from "react-icons/im";
// import { FiSun } from "react-icons/fi";
// import { StyledNav } from "./Nav.styled";
// import { Menubar } from "./Nav.styled";
// import { Searchbar } from "./Nav.styled";
// import { AppContext } from "../Helper/Context";
// import { BsFillMoonFill } from "react-icons/bs";
// import CountriesList from "../CountriesList/CountriesList";

// export const Navbar = () => {
//   const {
//     searchInput,
//     setSearchInput,
//     fetchWeather,
//     theme,
//     setTheme,
//     fetchCountry,
//   } = useContext(AppContext);

//   const [pressed, setPressed] = React.useState(false);
//   const [searchText, setSearchText] = React.useState("Nigeria");

//   // Send input value
//   const handleChange = (e: any) => {
//     setSearchInput(e.target.value);
//     setSearchText(e.target.value);
//   };

//   //Submit input value
//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     fetchWeather(searchInput);
//     fetchCountry(searchInput);
//     setPressed(false);
//   };

//   //Handle Lighting
//   const toggleTheme = () => {
//     theme === "light" ? setTheme("dark") : setTheme("light");
//   };

//   return (
//     <StyledNav theme={theme}>
//       <nav>
//         <h2>SWISH. </h2>
//         <Menubar>
//           <Searchbar>
//             <form
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 width: "300px",
//                 overflow: "hidden",
//                 gap: "0.5rem",
//               }}
//               onSubmit={(e) => handleSubmit(e)}
//             >
//               <input
//                 value={searchText}
//                 onChange={handleChange}
//                 onClickCapture={() => setPressed(true)}
//                 placeholder="Enter The Country..."
//                 type="text"
//                 required
//                 style={{
//                   width: "90%",
//                   textTransform: "capitalize",
//                 }}
//               />
//               <button
//                 // onClick={(e) => handleSubmit(e)}
//                 style={{
//                   display: "grid",
//                   placeContent: "center",
//                   padding: "0.5rem",
//                   cursor: "pointer",
//                 }}
//               >
//                 <ImSearch className="search-ico" style={{ fontSize: "1.2rem", fontWeight: "800" }} />
//               </button>
//             </form>
//             {searchText?.length !== 0 && (
//               <CountriesList
//                 searchText={searchText}
//                 setSearchText={setSearchText}
//                 setSearchInput={setSearchInput}
//                 setPressed={setPressed}
//               />
//             )}
//           </Searchbar>
//           {theme === "dark" ? (
//             <p onClick={() => toggleTheme()} style={{ cursor: "pointer" }}>
//               <BsFillMoonFill />
//             </p>
//           ) : (
//             <p onClick={() => toggleTheme()} style={{ cursor: "pointer" }}>
//               <FiSun />
//             </p>
//           )}
//         </Menubar>
//       </nav>
//     </StyledNav>
//   );
// }
// };
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

  const { searchInput, setSearchInput,country,setCountry, fetchWeather, theme, setTheme, currentUnit, setCurrentUnit } =
    useContext(AppContext);

  const [searchText, setSearchText] = React.useState("Nigeria");
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
      {/* <nav>
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
      </nav> */}
      <nav >
        {/* <div className="NavHeader" >
          <h2>SWISH </h2>
          <h4>SWISH </h4>
        </div> */}
      <div className="NavContainer"  >
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
            <form
              style={{
                display: "flex",
                alignItems: "center",
                width: "300px",
                overflow: "hidden",
                gap: "0.5rem",
              }}
              onSubmit={(e) => handleSubmit(e)}
            >
              <input
                value={searchText}
                onChange={handleChange}
                // onClickCapture={() => setPressed(true)}
                placeholder="Enter The Country..."
                type="text"
                required
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
