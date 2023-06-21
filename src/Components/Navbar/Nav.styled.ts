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

  .NavHeader {
    /* border: 3px yellow solid; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    display: none;
    @media (max-width: 585px ) {
      display: flex;
    }
  }
  .NavContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    width: 94%;
    margin: auto;
    position: relative;
    /* border: 2px red solid; */
    @media (max-width: 700px ) {
      flex-wrap: wrap;
      padding:20px 0;
    }
   h2{
    @media (max-width: 585px ) {
    }
   }
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
      width: 100%;
      /* border: 2px green solid; */
      /* position: relative; */
    }
    @media (max-width: 520px) {
      nav h2 {
        margin-bottom: 40px;
        /* border: 2px solid yellow; */
      }

    }
  }
`;

export const Menubar = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
  width: 100%;
  /* border: 4px green solid; */
  @media (max-width: 700px ) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
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
      top: 15px;
    }
  }
`;

export const Convert = styled.div`
/* border: 2px blue solid; */
@media (max-width: 600px ) {
  position: absolute;
  top: 32%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
select{
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  outline: none;
 @media (max-width: 750px) {
  select{
    display: none;
  }
}
@media (max-width: 600px) {
  select{
    display: none;
  }
}
@media (max-width:335px) {
  select{
    display: none;
  }
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
