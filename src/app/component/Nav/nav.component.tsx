import styles from './nav.module.scss';
import Btn from '../Btn/btn.component';


export default function Nav() {
    return (
        <div className={`${styles.mainContainer} flex w-full h-28 border-b-4 border-black bg-white`}>
            <div className={`${styles.menuBtn}`}></div>
            <Btn>test</Btn>
        </div>
    );
}