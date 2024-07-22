import styles from './btn.module.scss';




type PropsType = {
    children: React.ReactNode
}

export default function Btn(props: PropsType): JSX.Element {
    return (
        <div className={`${styles.mainContainer} p-3 `}>{props.children}</div>
    );
}