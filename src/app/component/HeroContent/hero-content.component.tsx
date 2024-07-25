import styles from './hero-content.module.scss';
import StatusBar from '../StatusBar/status-bar.component';
import Question from '../Question/question.component';
import Options from '../Options/options.component';

type apiDataType = {
    type: string,
    difficulty: string,
    category: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
  }

type propsType = {
    apiData: apiDataType[],
    QuestionNo: number
}

export default function HeroContent(props: propsType): JSX.Element {
    return (
        <div className={`${styles.mainContainer}`}>
            <StatusBar maxQuestions={props.apiData.length} />
            <Question question={props.apiData[props.QuestionNo].question} />
            <Options correct_answer={props.apiData[props.QuestionNo].correct_answer} incorrect_answers={props.apiData[props.QuestionNo].incorrect_answers} />
        </div>
    )
}