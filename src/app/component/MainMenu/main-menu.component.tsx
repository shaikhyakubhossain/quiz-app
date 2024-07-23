import styles from './main-menu.module.scss';
import Btn from "../Btn/btn.component";
import Link from 'next/link';

type propsType = {

}

export default function MainMenu(props: propsType): JSX.Element {

    return (
        <div className={`${styles.mainContainer} text-center mt-12`}>
            <Link href={'/Question'}><Btn >Start Quiz</Btn></Link>
        </div>
    )
}