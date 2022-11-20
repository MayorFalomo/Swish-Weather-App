import React, { useContext } from "react";
import { AppContext } from "../Helper/Context";
import { HeroSection } from "./Herostyle.styled";
import { Reports } from "./Herostyle.styled";
import { Textsection } from "./Herostyle.styled";
import { Time } from "./Herostyle.styled";

export const Herosection = () => {
  const { country, theme } = useContext(AppContext);

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
          <img src={country.current?.weather_icons} alt="img"></img>
          <h2>{country.current?.temperature} &deg;C</h2>
          <p>{country.request?.query}</p>
        </Reports>
        <Time>
          <h1>{country.current?.observation_time} </h1>
          <span>
            {country.current?.weather_descriptions}, {printDate}
          </span>
        </Time>
      </Textsection>
    </HeroSection>
  );
};
