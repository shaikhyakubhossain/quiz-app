import HeroContent from "@/app/component/HeroContent/hero-content.component";

type propsType = {
  params: {
    QuestionNo: string
  }
}

export default async function Question(props: propsType): Promise<JSX.Element>{

  const response = await fetch('https://opentdb.com/api.php?amount=10&category=27');

  const json = await response.json();


  const QuestionNo = parseInt(props.params.QuestionNo) - 1;

    return (
        <div>
          <HeroContent apiData={json.results} QuestionNo={QuestionNo}/>
        </div>
    )


}