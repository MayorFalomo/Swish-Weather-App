import styled from "styled-components";

export const StyledInfo = styled.div`
  margin-top: 40px;
  margin-bottom: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  background-color: ${(props: any) =>
    props.theme === "light" ? " #E0E5EC" : "#020419"};
  color: ${(props: any) => (props.theme === "light" ? "#020419" : " #E0E5EC")};
  @media (max-width: 950px) {
    & {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;
    }
  }
`;

export const Morestyled = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: auto;

  @media (max-width: 500px) {
    & {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  }
`;
export const Spanflex = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  p {
    font-size: 30px;
  }
`;

export const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  background-color: ${(props: any) =>
    props.theme === "light" ? " #fff" : "#fff"};
  color: ${(props: any) => (props.theme === "light" ? "#000" : " #000")};
  border-radius: 15px;
`;
export const Rainfall = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 500px) {
    & {
      width: 100%;
    }
  }
`;
export const Sunset = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 50px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  background-color: ${(props: any) =>
    props.theme === "light" ? "#E0E5EC" : " #5091BA"};
  color: ${(props: any) => (props.theme === "light" ? "#000" : " #000")};
  width: 100%;

  @media (max-width: 500px) {
    & {
      width: 100%;
    }
  }
`;

export const Displayflex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
`;
