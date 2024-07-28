import styles from './main-menu.module.scss';
import ResetStatesAndRouteChangeBtn from '../ResetStatesAndRouteChangeBtn/reset-states-and-route-change-btn.component';


export default function MainMenu(): JSX.Element {

    return (
        <div className={`${styles.mainContainer} text-center mt-12`}>
            <ResetStatesAndRouteChangeBtn url={"/Question/1"}>Start Quiz</ResetStatesAndRouteChangeBtn>
        </div>
    )
}