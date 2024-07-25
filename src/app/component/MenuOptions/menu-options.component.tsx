import styles from './menu-options.module.scss'


type propsType = {
    children: JSX.Element | JSX.Element[]
}

export default function MenuOptions(props: propsType): JSX.Element {
    return (
        <div className={`${styles.mainContainer}`}>
            {props.children}
        </div>
    )
}