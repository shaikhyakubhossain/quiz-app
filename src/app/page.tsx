import './globals.css';
import Nav from './component/Nav/nav.component';
import StatusBar from './component/StatusBar/status-bar.component';
import Question from './component/Question/question.component';

export default function Home(): JSX.Element{
  return (
      <div className=' bg-orange-100'>
        <Nav />
        <StatusBar />
        <Question />
      </div>
  )
}
