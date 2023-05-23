import styled from "styled-components";

export const StyledInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: ${(props: any) => (props.theme === "light" ? "#020419" : " #E0E5EC")};
  /* background-color: ${(props: any) => (props.theme === "light" ? "#020419" : " #E0E5EC")}; */
  width: 90%;
  margin: 4rem auto;
  position: relative;

  @media (max-width: 950px) {
    & {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;
    }
  }

  @media (max-width: 450px) {
    & {
      margin-top: 3rem;
    }
  }
`;

export const Morestyled = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  align-self: flex-start;

  @media (max-width: 500px) {
    & {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      width: 100%;
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
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  background-color: ${(props: any) =>
    props.theme === "light" ? " #fff" : "#fff"};
  color: ${(props: any) => (props.theme === "light" ? "#000" : " #000")};
  border-radius: 15px;

  @media (max-width: 500px) {
    & {
      max-width: 80%;
    }
  }
`;
export const Rainfall = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .spin{
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 20px;
  }
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
  gap: 1rem;
  padding: 20px;
  border-radius: 15px;
  transition: 0.5s ease;
  color: ${(props: any) => (props.theme === "light" ? "#000" : " #fff")};
  width: 100%;
  /* border: 2px red solid; */
  @media (max-width: 500px) {
    & {
      width: 100%;
    }
    .earth{
  width: 100%;
  height: 100%;
    }
    .latitude{
      position: absolute;
      left: 20px;
    }
    .longitude{
      position: absolute;
      right: 20px;
    }
  }
`;

export const Displayflex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
`;
