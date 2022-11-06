import styled, { css } from "styled-components";

interface CardStyle {
  category: "work" | "play" | "study" | "exercise" | "social" | "self care";
}

export const CardContainer = styled.div<CardStyle>`
  border-radius: 16px;
  
  display: flex;
  align-items: flex-end;

  &:hover {
    filter: brightness(1.3);
    cursor: pointer;
    transition: all 0.3s;
    transform: scale(1.1);
  }

  ${({ category }) => category ? css`
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 90% - 10%;
  ` : null}

  ${({ category }) => category === "work" && css`
    background: hsl(15, 100%, 70%);
    background-image: url("/icon-work.svg");
  `}

  ${({ category }) => category === "play" && css`
    background: hsl(195, 74%, 62%);
    background-image: url("/icon-play.svg");
  `}

  ${({ category }) => category === "study" && css`
    background: hsl(348, 100%, 68%);
    background-image: url("/icon-study.svg");
  `}

  ${({ category }) => category === "exercise" && css`
    background: hsl(145, 58%, 55%);
    background-image: url("/icon-exercise.svg");
  `}

  ${({ category }) => category === "social" && css`
    background: hsl(264, 64%, 52%);
    background-image: url("/icon-social.svg");
  `}

  ${({ category }) => category === "self care" && css`
    background: hsl(43, 84%, 65%);
    background-image: url("/icon-self-care.svg");
  `}
`;

export const Details = styled.div`
  background: #1d204b;
  width: 100%;
  border-radius: 16px;
  padding: 1.5rem;
  margin-top: 2.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    font-weight: 400;
    font-size: 1.25rem;
    color: #e6ecef;
    margin-bottom: 0.5rem;
  }
  
  h3 {
    font-weight: 300;
    font-size: 2rem;
    color: #e6ecef;
  }

  h4 {
    font-weight: 300;
    color: #babff8;
  }

  @media (min-width: 1440px){

    > div:nth-last-child(1) {
      display: flex;
      flex-direction: column;
    }
  }
`;