import styled from "styled-components";

export const CountriesListStyled = styled.div<{ countryArr: any }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 80%;
  max-height: 200px;
  z-index: 999999;
  position: absolute;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${(props: any) =>
    props.theme === "dark" ? " #020419" : " #fff"};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  top: 3rem;
  padding: 1rem !important;

  span {
    color: #000;
    font-size: 0.9rem;
    cursor: pointer;
    width: 100%;
    padding: 10px 5px;
    border-radius: 5px;

    :hover {
      background-color: aliceblue;
    }
  }
`;
