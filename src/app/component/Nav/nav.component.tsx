import styles from './nav.module.scss';
import ResetStatesAndRouteChangeBtn from '../ResetStatesAndRouteChangeBtn/reset-states-and-route-change-btn.component';

export default function Nav() {
    return (
        <div className={`${styles.mainContainer} flex w-full h-28 border-b-4 border-black bg-white`}>
            <div className={`${styles.menuBtn}`}></div>
            <ResetStatesAndRouteChangeBtn url={'/'} customBgColor='#FF58FA'>Home</ResetStatesAndRouteChangeBtn>
        </div>
    );
}