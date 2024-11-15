import styles from './btn.module.scss';

type PropsType = {
    onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void,
    children: React.ReactNode,
    customTW?: string,
    customBgColor?: string
}

export default function Btn(props: PropsType): JSX.Element {

    return (
        <span className={`${styles.mainContainer} ${styles.whenActive} my-6 mx-6 px-6 py-2 rounded font-medium text-2xl ` + props.customTW} style={{backgroundColor: props.customBgColor}} onClick={props.onClick}>{props.children}</span>
    );
}