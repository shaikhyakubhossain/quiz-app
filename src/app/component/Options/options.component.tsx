import styles from './options.module.scss';



type propsType = {
    correct_answer: string
    incorrect_answers: string[]
}



export default function Options(props: propsType): JSX.Element {
    return (
        <div className={`${styles.mainContainer} `}>
            
        </div>
    )
}