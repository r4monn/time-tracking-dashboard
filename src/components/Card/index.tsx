import { useContext } from "react";
import { DashboardsContext } from "../../contexts/DashboardsContext";
import { CardContainer, Details } from "./styles";

interface CardProps {
  name: string;
  timeframes: {
    daily: {
      current: number;
      previous: number;
    },
    monthly: {
      current: number;
      previous: number;
    },
    weekly: {
      current: number;
      previous: number;
    }
  }
  date?: number;
  category: string;
}

export function Card({ name, timeframes, category }: CardProps) {

  const contexto = useContext(DashboardsContext)

  return (
    <CardContainer category={category.toLowerCase()}>
      <Details>
        <div>
          <h2>{name}</h2>
          <img src="/icon-ellipsis.svg" />
        </div>
        <div>
          {contexto?.activeTimeframe === "weekly" && (
            <>
              <h3>{timeframes.weekly.current}hrs</h3>
              <h4>Last Week - {timeframes.weekly.previous}hrs</h4>
            </>
          )}

          {contexto?.activeTimeframe === "daily" && (
            <>
              <h3>{timeframes.daily.current}hrs</h3>
              <h4>Last Week - {timeframes.daily.previous}hrs</h4>
            </>
          )}

          {contexto?.activeTimeframe === "monthly" && (
            <>
              <h3>{timeframes.monthly.current}hrs</h3>
              <h4>Last Week - {timeframes.monthly.previous}hrs</h4>
            </>
          )}
        </div>
      </Details>
    </CardContainer>
  )

}