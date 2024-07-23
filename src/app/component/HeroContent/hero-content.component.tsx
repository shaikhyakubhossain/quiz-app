import styles from './hero-content.module.scss';
import StatusBar from '../StatusBar/status-bar.component';
import Question from '../Question/question.component';

export default function HeroContent(): JSX.Element {
    return (
        <div className={`${styles.mainContainer}`}>
            <StatusBar />
            <Question />
        </div>
    )
}