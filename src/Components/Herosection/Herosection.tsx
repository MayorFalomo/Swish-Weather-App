import React, { useContext } from "react";
import { AppContext } from "../Helper/Context";
import { HeroSection } from "./Herostyle.styled";
import { Reports } from "./Herostyle.styled";
import { Textsection } from "./Herostyle.styled";
import { Time } from "./Herostyle.styled";


export const Herosection = () =>{
  const { theme, country } = useContext(AppContext);
  
  const printDate = new Date().toLocaleString("default", { weekday: "long" });
  return (
    <HeroSection theme={theme}>
      {theme === "dark" ? (
        <img src="./snow.svg" alt="img" />
      ) : (
        <img src="./granite.svg" alt="img" />
      )}
      <Textsection>
        <Reports>
          <img src={`http://openweathermap.org/img/w/${country.weather[0]?.icon}.png`} alt='img' />
          <h2>{country.main?.temp} &deg;C</h2>
          <p>{country.request?.query}</p>
        </Reports>
        <Time>
          <h1>{country.current?.observation_time} </h1>
          <span>
            {country.weather[0]?.description}, {printDate}
          </span>
        </Time>
      </Textsection>
    </HeroSection>
  );
};
