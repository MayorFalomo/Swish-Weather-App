import React, { useContext } from "react";
import { BiWind } from "react-icons/bi";
import { GiWindSlap } from "react-icons/gi";
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
                <span>{country.main?.humidity}% </span>
              </div>
            </Spanflex>
            <Spanflex>
              <p>{<GiWindSlap />} </p>
              <div>
                <h3>Wind Degree </h3>
                <span>{country.wind?.deg} </span>
              </div>
            </Spanflex>
          </FlexItem>
          <FlexItem theme={theme}>
            <Spanflex>
              <p>{<BiWind />} </p>
              <div>
                <h3>Wind Speed </h3>
                <span>{country.wind?.speed} </span>
              </div>
            </Spanflex>
            <Spanflex>
              <p>{<BsCloudSun />} </p>
              <div>
                <h3>Visibility </h3>
                <span>{country?.visibility} </span>
              </div>
            </Spanflex>
          </FlexItem>
        </Morestyled>

        <Rainfall>
          <Sunset theme={theme}>
            <div>
              <h2>Latitude </h2>
              <p>{country.coord?.lat}</p>
            </div>
            <div>
              <h2> Longitude </h2>
              <span> {country.coord?.lon} </span>
            </div>
          </Sunset>
        </Rainfall>
      </Displayflex>
      <Country />
    </StyledInfo>
  );
};
