import styles from './nav.module.scss';
import ResetStatesAndRouteChangeBtn from '../ResetStatesAndRouteChangeBtn/reset-states-and-route-change-btn.component';
import TopLoading from '../TopLoading/top-loading.component';

export default function Nav() {
    return (
        <div className={`${styles.mainContainer} fixed top-0 py-5 w-full h-20 border-b-4 border-black bg-white`}>
            <TopLoading />
            <div className={`${styles.menuBtn}`}></div>
            <ResetStatesAndRouteChangeBtn url={'/'} customBgColor='#FF58FA' customTW='text-xl mx-4'>Home</ResetStatesAndRouteChangeBtn>
        </div>
    );
}