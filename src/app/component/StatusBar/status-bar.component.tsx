import styles from './status-bar.module.scss';
import MainTimer from '../MainTimer/main-timer.component';
import PointsCounter from '../PointsCounter/points-counter.component';

type propsType = {
    currentQuestion: number,
    maxQuestions: number
}

export default function StatusBar(props: propsType) {
    return (
        <div className={`${styles.mainContainer} flex justify-between w-4/5 mx-auto mt-10 pb-3 border-b-4 border-black font-bold`}>
            <div className={`${styles.questionCount}`}>Q {props.currentQuestion}/{props.maxQuestions}</div>
            <PointsCounter />
            <MainTimer/>
        </div>
    );
}