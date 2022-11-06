import { Container, Content } from "./styles/styles";
import { Navigation } from "./components/Navigation"
import { Card } from "./components/Card";
import { useEffect } from "react";
import { useState } from "react";

interface Dashboard {
  id: number;
  title: string;
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
}

function App() {
  let url = "http://localhost:3000/dashboards";

  const [dashboards, setDashboards] = useState<Dashboard[]>([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setDashboards(response)
      })
  }, [])

  return (
    <Container>
      <Content>
        <Navigation />
        {dashboards.map((dashboard) => (
          <Card
            key={dashboard.id}
            name={dashboard.title}
            category={dashboard.title}
            currentTime={dashboard.timeframes.weekly.current}
            previousTime={dashboard.timeframes.weekly.previous}
          />
        ))}
      </Content>
    </Container>
  )
}

export default App
