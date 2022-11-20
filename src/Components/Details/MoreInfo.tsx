import React, { useContext } from "react";
import { BiWind } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { BsCloudSun } from "react-icons/bs";
import { BsDropletHalf } from "react-icons/bs";
import { Country } from "../Countries/Country";
import { AppContext } from "../Helper/Context";
import {
  FlexItem,
  Morestyled,
  Rainfall,
  Spanflex,
  StyledInfo,
  Sunset,
  Displayflex,
} from "./Moreinfo.styled";

export interface MoreInfos {}

export const MoreInfo = () => {
  const { country, theme } = useContext(AppContext);
  return (
    <StyledInfo theme={theme}>
      <Displayflex>
        <Morestyled>
          <FlexItem theme={theme}>
            <Spanflex>
              <p>{<BsDropletHalf />} </p>
              <div>
                <h3>Humidity </h3>
                <span>{country.current?.humidity}% </span>
              </div>
            </Spanflex>
            <Spanflex>
              <p>{<BsSun />} </p>
              <div>
                <h3>UvIndex </h3>
                <span>{country.current?.uv_index} of 10 </span>
              </div>
            </Spanflex>
          </FlexItem>
          <FlexItem theme={theme}>
            <Spanflex>
              <p>{<BiWind />} </p>
              <div>
                <h3>Wind Speed </h3>
                <span>{country.current?.wind_speed} </span>
              </div>
            </Spanflex>
            <Spanflex>
              <p>{<BsCloudSun />} </p>
              <div>
                <h3>Visibility </h3>
                <span>{country.current?.visibility} </span>
              </div>
            </Spanflex>
          </FlexItem>
        </Morestyled>

        <Rainfall>
          <Sunset theme={theme}>
            <div>
              <h2>Sunrise </h2>
              <p>{country.forecast?.["2022-11-19"]?.astro?.sunrise}</p>
            </div>
            <div>
              <h2> Sunset </h2>
              <span> {country.forecast?.["2022-11-19"]?.astro?.sunset} </span>
            </div>
          </Sunset>
        </Rainfall>
      </Displayflex>
      <Country />
    </StyledInfo>
  );
};
