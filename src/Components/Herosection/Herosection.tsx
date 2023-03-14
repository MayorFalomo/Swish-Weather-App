import React, { useContext } from "react";
import { AppContext } from "../Helper/Context";
import { HeroSection } from "./Herostyle.styled";
import { Reports } from "./Herostyle.styled";
import { Textsection } from "./Herostyle.styled";
import { Time } from "./Herostyle.styled";


export const Herosection = () =>{
  const { theme, country, currentUnit } = useContext(AppContext);
  
  const printDate = new Date().toLocaleString("default", { weekday: "long" });

  const times = country?.dt
  const time = new Date(times * 1000);
  const timeFormat = ('0' + time.getHours()).slice(-2) + ':' + ('0' + time.getMinutes()).slice(-2);
    
  
  return (
    <HeroSection theme={theme}>
      {theme === "dark" ? (
        <img src="./snow.svg" alt="img" />
      ) : (
        <img src="./granite.svg" alt="img" />
      )}
      <Textsection>
        <Reports>
          <img src={`http://openweathermap.org/img/wn/${country.weather?.[0]?.icon}.png`} alt='img' />
          <h2>{currentUnit || country.main?.temp + '\u00b0C' } </h2>
          <p>{country?.name}</p>
        </Reports>
        <Time>
          <h1>{timeFormat} </h1>
          <span>
            {country.weather?.[0]?.description}, {printDate}
          </span>
        </Time>
      </Textsection>
    </HeroSection>
  );
};
