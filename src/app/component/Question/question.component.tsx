import styles from './question.module.scss';
import he from 'he';



type propsType = {
    question: string
}

export default function Question(props: propsType): JSX.Element {

    return (
        <div className={`${styles.mainContainer} mx-auto mt-10 w-4/5 text-center font-bold text-3xl`}>
            {he.decode(props.question)}
        </div>
    )
}