import './globals.css';
import MainMenu from './component/MainMenu/main-menu.component';

export default async function Home(): Promise<JSX.Element> {

  const response = await fetch('https://opentdb.com/api.php?amount=10&category=27');

  const json = await response.json();

  return (
      <div>
          <MainMenu apiData={json.results} />
      </div>
  )
}
