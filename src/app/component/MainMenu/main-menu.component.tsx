import Btn from "../Btn/btn.component";

type propsType = {
    apiData: any
}

export default function MainMenu(props: propsType): JSX.Element {


    return (
        <div>
            <Btn>Start Quiz</Btn>
        </div>
    )
}