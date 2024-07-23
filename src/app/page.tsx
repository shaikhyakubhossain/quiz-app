import './globals.css';
import Nav from './component/Nav/nav.component';
import HeroContent from './component/HeroContent/hero-content.component';

export default async function Home(): Promise<JSX.Element> {

  const response = await fetch('https://opentdb.com/api.php?amount=10&category=27');

  const json = await response.json();

  return (
      <div className=' bg-orange-100'>
        <Nav />
        <HeroContent apiData={json.result} />
      </div>
  )
}
