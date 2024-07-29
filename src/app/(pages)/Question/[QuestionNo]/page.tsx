import HeroContent from "@/app/component/HeroContent/hero-content.component";
import { apiUrls_Base } from '../../../constants/Utils/urls';

type propsType = {
  params: {
    QuestionNo: string
  },
  searchParams: {
    category: string,
    difficulty: string,
  }
}

export default async function Question(props: propsType): Promise<JSX.Element>{

  const response = await fetch(apiUrls_Base + '?amount=10&' + 'category=' + props.searchParams.category + '&' + 'difficulty=' + props.searchParams.difficulty);

  const json = await response.json();


  const QuestionNo = parseInt(props.params.QuestionNo) - 1;

    return (
        <div>
          <HeroContent apiData={json.results} QuestionNo={QuestionNo}/>
        </div>
    )


}