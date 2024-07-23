import styles from './question.module.scss';



export default function Question(): JSX.Element {

    return (
        <div className={`${styles.mainContainer} mx-auto mt-10 w-4/5 text-center font-bold text-3xl`}>
            testing - question
        </div>
    )
}