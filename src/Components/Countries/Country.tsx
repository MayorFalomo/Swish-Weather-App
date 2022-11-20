import React, { useContext } from "react";
import { AppContext } from "../Helper/Context";
import { CountryStyled } from "./Country.styled";
import { Countries } from "./Country.styled";
export interface Countries {}

export function Country() {
  const { countryData, theme } = useContext(AppContext);

  return (
    <CountryStyled theme={theme}>
      <img src={countryData.flags?.svg} alt="img" />
      <Countries theme={theme}>
        <p>
          Name: <b>{countryData.name}</b>{" "}
        </p>
        <p>
          Native Name: <b>{countryData?.nativeName}</b>{" "}
        </p>
        <p>
          Capital City: <b>{countryData?.capital}</b>{" "}
        </p>
        <p>
          Continent: <b>{countryData?.region} </b>
        </p>
        <p>
          Subregion: <b>{countryData?.subregion} </b>{" "}
        </p>
        <p>
          Population: <b>{countryData?.population} </b>{" "}
        </p>
        <p>
          Currency: <b>{countryData?.currencies?.["0"]?.name}</b>{" "}
        </p>
      </Countries>
    </CountryStyled>
  );
}
