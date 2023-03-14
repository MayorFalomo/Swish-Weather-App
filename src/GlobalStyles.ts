import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

a{
    text-decoration: none;
}
li{
    list-style: none;
}
img{
    width: 100%;
}
body{
    overflow-x: hidden;
    background-color: ${(props: any) =>
      props.theme === "dark" ? " #020419" : " #fff"};
      transition: 0.5s ease;
      
}
.App{
    overflow-x: hidden;
    width: 100%;
     background-color: ${(props: any) =>
       props.theme === "dark" ? " #020419" : " #fff"};
       transition: 0.5s ease;
}
`;

export default GlobalStyle;
