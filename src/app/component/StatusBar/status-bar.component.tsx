import styles from './status-bar.module.scss';

type propsType = {
    currentQuestion: number,
    maxQuestions: number
}

export default function StatusBar(props: propsType) {
    return (
        <div className={`${styles.mainContainer} flex justify-between w-4/5 mx-auto mt-10 pb-3 border-b-4 border-black font-bold`}>
            <div className={`${styles.questionCount}`}>Q {props.currentQuestion}/{props.maxQuestions}</div>
            <div className={`${styles.pointCount}`}>100 points</div>
            <div className={`${styles.timeCount}`}>00:00 T</div>
        </div>
    );
}