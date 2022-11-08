import { useContext } from 'react'
import { DashboardsContext } from '../../contexts/DashboardsContext'
import { Active, NavigationContainer, NavigationHeader, NavigationMenu } from './styles'

export function Navigation() {

  const contexto = useContext(DashboardsContext)

  function handleActiveTimeframe(e: any) {

    let selectedTimeframe = e.target.textContent.toLowerCase();

    switch (selectedTimeframe) {
      case "daily": contexto?.setActiveTimeframe("daily")
        break;
      case "weekly": contexto?.setActiveTimeframe("weekly")
        break;
      case "monthly": contexto?.setActiveTimeframe("monthly")
        break;
    }
  }

  return (
    <NavigationContainer>
      <NavigationHeader>
        <div className='profile'>
          <img src="/image-jeremy.png" alt="Profile" className='avatar' />
        </div>
        <div className='infos'>
          <span>Report for</span>
          <h1>Jeremy Robson</h1>
        </div>
      </NavigationHeader>
      <NavigationMenu>
        <ul>
          <Active onClick={handleActiveTimeframe} white={contexto?.activeTimeframe === "daily" ? "white" : ""}>Daily</Active>
          <Active onClick={handleActiveTimeframe} white={contexto?.activeTimeframe === "weekly" ? "white" : ""}>Weekly</Active>
          <Active onClick={handleActiveTimeframe} white={contexto?.activeTimeframe === "monthly" ? "white" : ""}>Monthly</Active>
        </ul>
      </NavigationMenu>
    </NavigationContainer>
  )
}