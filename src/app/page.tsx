import './globals.css';
import Nav from './component/Nav/nav.component';
import HeroContent from './component/HeroContent/hero-content.component';

export default function Home(): JSX.Element{
  return (
      <div className=' bg-orange-100'>
        <Nav />
        <HeroContent />
      </div>
  )
}
