import HeroContent from "@/app/component/HeroContent/hero-content.component";

export default async function Question(): Promise<JSX.Element>{

  const response = await fetch('https://opentdb.com/api.php?amount=10&category=27');

  const json = await response.json();

    return (
        <div>
          <HeroContent apiData={json.results} />
        </div>
    )


}