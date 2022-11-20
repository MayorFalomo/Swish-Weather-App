import React, { useEffect, useState } from "react";
import { MoreInfo } from "./Components/Details/MoreInfo";
import { Herosection } from "./Components/Herosection/Herosection";
import { Navbar } from "./Components/Navbar/Navbar";
import { AppContext } from "./Components/Helper/Context";
import GlobalStyle from "./GlobalStyles";
import axios from "axios";

const App = () => {
  const [country, setCountry] = useState<object | null>({});
  const [searchInput, setSearchInput] = useState<string>("Nigeria");
  const [countryData, setCountryData] = useState<object>({});
  const [theme, setTheme] = useState<string>("light");

  const url = `http://api.weatherstack.com/forecast?access_key=19feb7f0756b1006ea2eec6151d84d46&query=`;
  const countryUrl = `https://restcountries.com/v2/name`;

  //Weather api call
  const fetchWeather = (searchInput: any) => {
    axios
      .get(`${url}${searchInput}`)
      .then((res) => setCountry(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchWeather(searchInput);
  }, []);

  //Countries Api Call
  const fetchCountry = (searchInput: any) => {
    axios
      .get(`${countryUrl}/${searchInput}?fullText=true`)
      .then((res) => setCountryData(res.data[0]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCountry(searchInput);
  }, [searchInput]);

  return (
    <AppContext.Provider
      value={{
        country,
        setCountry,
        searchInput,
        setSearchInput,
        fetchWeather,
        countryData,
        setCountryData,
        theme,
        setTheme,
      }}
    >
      <div className="App">
        <GlobalStyle theme={theme} />
        <Navbar />
        <Herosection />
        <MoreInfo />
      </div>
    </AppContext.Provider>
  );
};

export default App;
