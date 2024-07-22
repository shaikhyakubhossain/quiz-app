import './globals.css';
import Nav from './component/Nav/nav.component';
import StatusBar from './component/StatusBar/status-bar.component';

export default function Home(): JSX.Element{
  return (
      <div className=''>
        <Nav />
        <StatusBar />
      </div>
  )
}
