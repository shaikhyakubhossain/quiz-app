import styles from './status-bar.module.scss';


export default function StatusBar() {
    return (
        <div className={`${styles.mainContainer} flex justify-between w-4/5 mx-auto border-b-4 border-black`}>
            <div>Q 01/10</div>
            <div>100 points</div>
            <div>00:00 T</div>
        </div>
    );
}