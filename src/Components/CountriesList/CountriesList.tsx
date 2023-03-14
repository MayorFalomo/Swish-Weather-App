import React, { useContext } from "react";
import { AppContext } from "../Helper/Context";
import { CountriesListStyled } from "./CountriesList.styled";

function CountriesList(props: any) {
  const { countryArr, fetchCountry, fetchWeather } = useContext(AppContext);

  return (
    <CountriesListStyled countryArr={countryArr}>
      {countryArr
        ?.filter((data: any) => {
          if (props.searchText === "") {
            return data;
          } else if (
            data.name.toLowerCase().includes(props.searchText.toLowerCase()) ||
            data.capital?.toLowerCase().includes(props.searchText.toLowerCase())
          ) {
            return data;
          }
        })
        .map((country: any, index: any) => {
          return (
            <span
              key={index}
              className="col"
              onClick={() => {
                props.setSearchText(country.name);
                props.setSearchInput(country.name);
                // props.setPressed(false);
                fetchCountry(country.name);
                fetchWeather(country.name);
              }}
            >
              {country.name}
            </span>
          );
        })}
      {
        // If there is no country found
        countryArr?.filter((data: any) => {
          if (props.searchText === "") {
            return data;
          } else if (
            data.name.toLowerCase().includes(props.searchText.toLowerCase()) ||
            data.capital?.toLowerCase().includes(props.searchText.toLowerCase())
          ) {
            return data;
          }
        }).length === 0 && <span>No Country Found</span>
      }
    </CountriesListStyled>
  );
}

export default CountriesList;
