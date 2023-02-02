import React, { useContext } from "react";
import { AppContext } from "../Helper/Context";
import { CountryStyled } from "./Country.styled";
import { Countries } from "./Country.styled";

export function Country() {
  const { countryData, theme } = useContext(AppContext);

  return (
    <CountryStyled theme={theme}>
      {countryData ? (
        <>
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
        </>
      ) : (
        <div>
          <h2
            style={{
              color: "orange",
            }}
          >
            Something went wrong?
          </h2>
          <br></br>
          <p>1. Try checking the spelling of the country.</p>
          <p>2. Country(e.g capital) simply is not recognized.</p>
        </div>
      )}
    </CountryStyled>
  );
}
