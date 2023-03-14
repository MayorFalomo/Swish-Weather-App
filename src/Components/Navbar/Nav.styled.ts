import styled from "styled-components";

export const StyledNav = styled.div`
  color: ${(props: any) => (props.theme === "light" ? "#020419" : " #E0E5EC")};
  position: fixed;
  width: 100%;
  z-index: 99999;
  transition: 0.5s ease;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    width: 94%;
    margin: auto;
  }

  .search-ico {
    color: ${(props: any) => (props.theme === "dark" ? " #fff" : " #000")};
  }

  @media (max-width: 585px) {
    nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      /* border: 2px red solid; */
      /* position: relative; */
    }
    @media (max-width: 520px) {
      nav h2 {
        margin-bottom: 30px;
      }
    }
  }
`;

export const Convert = styled.div`
select{
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  outline: none;
}
@media (max-width: 750px) {
  select{
    display: none;
  }
}
@media (max-width: 585px) {
  select{
    display: block;
    position: absolute;
    top: 35px;
    z-index: 999;
    left: 20px;
  }
}
@media (max-width:335px) {
  select{
    display: none;
  }
}
`;

export const Menubar = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
  width: 50%;
  /* border: 2px red solid; */
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
  z-index: 999999;

  @media (max-width: 500px) {
    & {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  input {
    padding: 10px 15px;
    border: 1px ghostwhite solid;
    outline: none;
    border-radius: 10px;
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
