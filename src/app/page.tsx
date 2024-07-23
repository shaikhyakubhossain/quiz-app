import './globals.css';

export default async function Home(): Promise<JSX.Element> {

  const response = await fetch('https://opentdb.com/api.php?amount=10&category=27');

  const json = await response.json();

  return (
      <div> </div>
  )
}
