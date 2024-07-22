import styles from './nav.module.scss';
import Btn from '../Btn/btn.component';


export default function Nav() {
    return (
        <div className={`${styles.mainContainer} flex w-full h-16 border-b-4 border-black`}>
            <div className={`${styles.menuBtn}`}></div>
            <div><Btn>test</Btn></div>
        </div>
    );
}