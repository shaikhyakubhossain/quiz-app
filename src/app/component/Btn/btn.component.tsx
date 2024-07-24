import styles from './btn.module.scss';




type PropsType = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    children: React.ReactNode
}

export default function Btn(props: PropsType): JSX.Element {
    return (
        <span className={`${styles.mainContainer} my-auto mx-6 px-6 py-2 rounded font-medium text-2xl`}>{props.children}</span>
    );
}