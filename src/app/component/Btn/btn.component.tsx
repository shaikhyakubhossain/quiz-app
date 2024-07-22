import styles from './btn.module.scss';




type PropsType = {
    children: React.ReactNode
}

export default function Btn(props: PropsType): JSX.Element {
    return (
        <div className={`${styles.mainContainer} my-auto px-6 py-2 bg-yellow-500 rounded`}>{props.children}</div>
    );
}