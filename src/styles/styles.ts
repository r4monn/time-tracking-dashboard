import styled from "styled-components";

export const Container = styled.div`
  background: #0d1323;
  
  display: flex;
  flex-direction: column;
  max-width: 100vw;

  @media (min-width: 375px){
    max-width: 375px;
  }

  @media (max-width: 1440px){
    max-width: 100vw;
  }

  @media (min-width: 1440px){
    max-width: 100vw;
    height: 100vh;
    justify-content: center;
  }

`;

export const Content = styled.div`
  margin: 3rem 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (min-width: 1440px){
    display: grid;
    grid-template-areas: 
    "menu card card card"
    "menu card card card";
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 2fr 2fr;
    margin: 10rem 10rem;

    max-height: 80vh;
  }
`;