import styles from './options.module.scss';
import { shuffleOptions } from '../../constants/Utils/methods';
import Btn from '../Btn/btn.component';



type propsType = {
    correct_answer: string
    incorrect_answers: string[]
}



export default function Options(props: propsType): JSX.Element {

    const options = props.incorrect_answers;
    options.push(props.correct_answer);

    return (
        <div className={`${styles.mainContainer} flex flex-wrap justify-center mt-10`}>
            {
                shuffleOptions(options).map((item, index): JSX.Element => {
                    return <Btn key={index} children={item} />
                })  
            }
        </div>
    )
}