import React, { useContext } from "react";
import { BiWind } from "react-icons/bi";
import { GiWindSlap } from "react-icons/gi";
import { BsCloudSun } from "react-icons/bs";
import { BsDropletHalf } from "react-icons/bs";
import { Country } from "../Countries/Country";
import { MdLocationOn } from "react-icons/md";
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
            <div className="latitude"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h2 style={{ display: "flex", alignItems: "center" }}>
                Lat <MdLocationOn />
              </h2>
              <p>{country.coord?.lat} &deg;</p>
            </div>
            <div className="earth" >
              <iframe style={{ border: 'none', borderRadius: '50%', height: 300, width: 300 }} src="https://solarsystem.nasa.gov/gltf_embed/2393&#39" xr-spatial-tracking='true' title="Earth" />
            </div>
            {/* <img
              src="./earth.png"
              alt=""
              style={{
                width: "150px",
              }}
            /> */}
            <div
              className="longitude"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h2 style={{ display: "flex", alignItems: "center" }}>
                Lon <MdLocationOn />
              </h2>
              <span> {country.coord?.lon} &deg; </span>
            </div>
          </Sunset>
          <p className="spin" >Spin the Earth </p>
        </Rainfall>
      </Displayflex>
      <Country />
    </StyledInfo>
  );
};
