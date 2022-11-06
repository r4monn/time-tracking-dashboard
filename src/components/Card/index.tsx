import { CardContainer, Details } from "./styles";

interface CardProps {
  name: string;
  currentTime: number;
  previousTime?: number;
  date?: number;
  category: string;
}

export function Card({ name, currentTime, previousTime, category }: CardProps) {

  return (
    <CardContainer category={category.toLowerCase()}>
      <Details>
        <div>
          <h2>{name}</h2>
          <img src="/icon-ellipsis.svg" />
        </div>
        <div>
          <h3>{currentTime}hrs</h3>
          <h4>Last Week - {previousTime}hrs</h4>
        </div>
      </Details>
    </CardContainer>
  )

}