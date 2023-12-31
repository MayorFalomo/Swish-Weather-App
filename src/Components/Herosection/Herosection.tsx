import React, { useContext } from "react";
import { AppContext } from "../Helper/Context";
import { HeroSection } from "./Herostyle.styled";
import { Reports } from "./Herostyle.styled";
import { Textsection } from "./Herostyle.styled";
import { Time } from "./Herostyle.styled";
import blGr from "./blackGranite.svg";

export const Herosection = () => {
  const { theme, country, currentUnit } = useContext(AppContext);

  const printDate = new Date().toLocaleString("default", { weekday: "long" });

  const times = country?.dt;
  const time = new Date(times * 1000);
  const timeFormat =
    ("0" + time.getHours()).slice(-2) +
    ":" +
    ("0" + time.getMinutes()).slice(-2);  
    

  return (
    <HeroSection theme={theme}>
      {theme === "dark" ? (
        <div
          className="bg-box"
          style={{
            backgroundImage: `url(https://images.hdqwalls.com/wallpapers/rocks-and-sea-4k-ef.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "500px",
            borderRadius: "20px",
            backgroundColor: '#000'
          }}
        ></div>
      ) : (
        <div
          className="bg-box"
          style={{
            backgroundImage: `url(https://www.incimages.com/uploaded_files/image/1920x1080/getty_521082088_331807.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "500px",
            borderRadius: "20px",
          }}
        ></div>
      )}
      <Textsection>
        <Reports>
          <img
            src={`http://openweathermap.org/img/wn/${country.weather?.[0]?.icon}.png`}
            alt="img"
          />
          <h2>{currentUnit ||country.main?.temp}</h2>
          <p style={{ fontWeight: "600", fontSize: "2rem" }}>{country?.name}</p>
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