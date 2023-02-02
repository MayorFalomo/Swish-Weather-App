import styled from "styled-components";

export const HeroSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 90%;
  color: ${(props: any) => (props.theme === "light" ? "#020419" : " #E0E5EC")};
  margin-top: 8rem;
  

  @media (max-width: 450px) {
    img {
      margin: 50px auto;
    }

    .bg-box {
      width: 95% !important;
      margin-top: 2rem;
    }
  }
  @media (max-width: 405px) {
    & {
      width: 100%;
    }
    img {
      margin: 50px auto;
    }
  }
`;

export const Reports = styled.div`
  img {
    max-width: 80px;
  }
  p {
    font-size: 20px;
  }
  h2 {
    font-size: 60px;
    font-weight: 100;
  }
  @media (max-width: 1035px) {
    img {
      width: 60px;
    }
    h2 {
      font-size: 45px;
    }
  }
  @media (max-width: 850px) {
    img {
      width: 50px;
    }
    h2 {
      font-size: 35px;
    }
  }
  @media (max-width: 740px) {
    h2 {
      font-size: 30px;
    }
  }
  @media (max-width: 740px) {
    img {
      display: none;
    }

    h2 {
      font-size: 50px;
    }
  }
  @media (max-width: 500px) {
    h2 {
      font-size: 35px;
    }
    p {
      font-size: 15px;
    }
  }
`;

export const Textsection = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: absolute;
  margin: 0;
  padding: 30px;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 90%;
  height: 80%;

  @media (max-width: 520px) {
    & {
      position: absolute;
      top: 60%;
    }
  }
  @media (max-width: 450px) {
    & {
      background: none !important;
      top: 50%;
      height: 50%;
    }
  }
  @media (max-width: 400px) {
    & {
      width: 100%;
    }
  }
`;

export const Time = styled.div`
  span {
    font-size: 20px;
  }
  @media (max-width: 520px) {
    h1 {
      font-size: 25px;
    }
    span {
      font-size: 14px;
    }
  }
`;
