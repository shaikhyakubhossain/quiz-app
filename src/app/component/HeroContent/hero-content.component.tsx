import styles from './hero-content.module.scss';
import StatusBar from '../StatusBar/status-bar.component';
import Question from '../Question/question.component';

``
type apiDataType = {
    type: string,
    difficulty: string,
    category: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
  }

type propsType = {
    apiData: apiDataType[]
}

export default function HeroContent(props: propsType): JSX.Element {
    return (
        <div className={`${styles.mainContainer}`}>
            <StatusBar />
            <Question />
        </div>
    )
}