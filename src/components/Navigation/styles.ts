import styled from "styled-components";

export const NavigationContainer = styled.div`
  border-radius: 16px;
  background: #1d204b;

  grid-area: menu;
`;

export const NavigationHeader = styled.div`
  background: #5746ea;
  border-radius: 16px;
  padding: 2rem;

  display: flex;

  .avatar {
    border: 3px solid white;
    border-radius: 999px;
    width: 70px;
  }

  @media (min-width: 1444px) {
    height: 15rem;
    display: flex;
    flex-direction: column;
  }

  .infos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1rem;
  }

  span {
    color: #beb6ff;
    font-weight: 400;
    font-size: 1rem;
    margin: 0.25rem 0;
  }

  h1 {
    color: #f2f1ff;
    font-weight: 300;
    font-size: 1.5rem;
  }
`;

export const NavigationMenu = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  ul {
    list-style: none;
    padding: 1.5rem;
    display: flex;
    gap: 35px;
    
    li, a {
      color: #6e72ab;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: white;
      }
    }
  }

  @media (min-width: 1440px){
    justify-content: flex-start;

    ul {
      display: flex;
      flex-direction: column;
    }
  }
`;