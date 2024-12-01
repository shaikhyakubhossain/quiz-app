import styles from './nav.module.scss';
import ResetStatesAndRouteChangeBtn from '../ResetStatesAndRouteChangeBtn/reset-states-and-route-change-btn.component';
import TopLoading from '../TopLoading/top-loading.component';
import DropDownMenu from '../DropDownMenu/drop-down-menu.component';

export default function Nav() {
    return (
        <div className={`${styles.mainContainer} flex justify-between items-center fixed top-0 py-5 w-full h-20 border-b-4 border-black bg-white`}>
            <TopLoading />
            <ResetStatesAndRouteChangeBtn url={'/'} customBgColor='#FF58FA' customTW='text-xl mx-4'>Home</ResetStatesAndRouteChangeBtn>
            <div className={`${styles.menuBtn}`}><DropDownMenu /></div>
        </div>
    );
}