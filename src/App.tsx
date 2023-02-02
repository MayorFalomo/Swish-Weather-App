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
  const [countryData, setCountryData] = useState<any>({});
  const [theme, setTheme] = useState<string>("light");
  const [countryArr, setCountryArr] = useState<any>([]);

  const countryUrl = `https://restcountries.com/v2/name`;

  //Weather api call
  const fetchWeather = (value: any) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=528a4189c2db4afdc92592c1adf225a3`;
    axios
      .get(`${url}`)
      .then((res) => setCountry(res.data))
      .catch((err) => console.log(err));
  };

  //Country Api Call
  const fetchCountry = (searchInput: any) => {
    axios
      .get(`${countryUrl}/${searchInput}?fullText=true`)
      .then((res) => setCountryData(res.data[0]))
      .catch((err) => {
        console.log(err);
        setCountryData(null);
      });
  };

  //Countries Api Call
  const fetchCountries = () => {
    axios
      .get(`https://restcountries.com/v2/all`)
      .then((res) => setCountryArr(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCountries();
    fetchWeather(searchInput);
    fetchCountry(searchInput);
  }, []);

  return (
    <AppContext.Provider
      value={{
        country,
        setCountry,
        searchInput,
        setSearchInput,
        fetchWeather,
        fetchCountry,
        countryData,
        setCountryData,
        theme,
        setTheme,

        countryArr,
        setCountryArr,
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
