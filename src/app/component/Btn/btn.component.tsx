import styles from './btn.module.scss';




type PropsType = {
    children: React.ReactNode
}

export default function Btn(props: PropsType): JSX.Element {
    return (
        <div className={`${styles.mainContainer} p-3 bg-yellow-500 `}>{props.children}</div>
    );
}