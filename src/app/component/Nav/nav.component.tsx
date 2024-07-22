import styles from './nav.module.scss';


export default function Nav() {
    return (
        <div className={`${styles.mainContainer} flex w-full h-16 border-b-4 border-black`}>
            <div className={`${styles.menuBtn}`}></div>
        </div>
    );
}