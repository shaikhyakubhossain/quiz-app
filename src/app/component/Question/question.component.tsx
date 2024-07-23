import styles from './question.module.scss';



type propsType = {
    question: string
}

export default function Question(props: propsType): JSX.Element {

    return (
        <div className={`${styles.mainContainer} mx-auto mt-10 w-4/5 text-center font-bold text-3xl`}>
            {props.question}
        </div>
    )
}