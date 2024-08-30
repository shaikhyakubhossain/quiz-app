import DisplayScore from '../../component/DisplayScore/display-score.component'


export default function Result(): JSX.Element {
    return (
        <div className={`w-auto flex flex-col justify-center text-center`}>
            <div className="text-5xl text-center mb-12">Thank you for playing</div>
            <DisplayScore />
        </div>
    ) 
}