import { NavigationContainer, NavigationHeader, NavigationMenu } from './styles'

export function Navigation() {
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
          <li><a href='/'>Daily</a></li>
          <li><a href='/'>Weekly</a></li>
          <li><a href='/'>Monthly</a></li>
        </ul>
      </NavigationMenu>
    </NavigationContainer>
  )
}