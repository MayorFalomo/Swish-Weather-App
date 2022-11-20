import styled from "styled-components";

export const CountryStyled = styled.div`
  max-width: 600px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  padding: 25px;
  background-color: white;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  border-radius: 15px;
  background-color: ${(props: any) =>
    props.theme === "light" ? " #fff" : "#fff"};
  color: ${(props: any) => (props.theme === "light" ? "#000" : " #000")};
  img {
    width: 200px;
  }
  @media (max-width: 500px) {
    & {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Countries = styled.div``;
