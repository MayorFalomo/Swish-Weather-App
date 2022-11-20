import styled from "styled-components";

export const StyledNav = styled.div`
  background-color: ${(props: any) =>
    props.theme === "light" ? " #E0E5EC" : "#020419"};
  color: ${(props: any) => (props.theme === "light" ? "#020419" : " #E0E5EC")};
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    width: 94%;
    margin: auto;
  }
  @media (max-width: 585px) {
    nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
    @media (max-width: 520px) {
      nav h2 {
        margin-bottom: 30px;
      }
    }
  }
`;

export const Menubar = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 30px;
  width: 50%;
  button {
    font-size: 30px;
  }
  div {
    padding: 7px 20px;
  }
  p {
    font-size: 35px;
  }
  @media (max-width: 585px) {
    p {
      position: absolute;
      right: 20px;
      top: 25px;
    }
  }
`;

export const Searchbar = styled.div`
  position: relative;
  @media (max-width: 500px) {
    & {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  input {
    padding: 10px 10px;
    width: 300px;
    border: none;
    outline: none;
  }
  button {
    position: absolute;
    right: 20px;
    top: 8px;
    background-color: transparent;
    border: none;
    outline: none;
  }
`;
