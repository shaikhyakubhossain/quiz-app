import styles from './question-settings.module.scss'
import Btn from '../Btn/btn.component';
import { categoriesList } from '@/app/constants/Utils/questionQuery';

type propsType = {
    setCategory: (category: string) => void,
    setDifficulty: (difficulty: string) => void

}


let categoryBtnClickPrev: HTMLSpanElement | null = null;
let difficultyBtnClickPrev: HTMLSpanElement | null = null;

export default function QuestionSettings(props: propsType): JSX.Element {

    const handleBtnColorChangeOnClick = (event: React.MouseEvent<HTMLSpanElement>, btnType: string) => {
        const btnClickCurrent = event.target as HTMLSpanElement;
        const btnInitialColor = btnClickCurrent.style.backgroundColor;
        
        if(btnType === "category") {
            categoryBtnClickPrev  ? categoryBtnClickPrev.style.backgroundColor = btnInitialColor : null;
            btnClickCurrent.style.backgroundColor = '#FF8383';
            categoryBtnClickPrev = btnClickCurrent;
        }
        else {
            difficultyBtnClickPrev  ? difficultyBtnClickPrev.style.backgroundColor = btnInitialColor : null;
            btnClickCurrent.style.backgroundColor = '#FF8383';
            difficultyBtnClickPrev = btnClickCurrent;
        }


    }

    return (
        <div className={`${styles.mainContainer}`}>
            <div className={`text-3xl`}>Select Category</div>
            <div className={`${styles.categoryContainer} flex justify-center flex-wrap `}>
                {
                    categoriesList.map((item, index): JSX.Element => {
                        return(
                            <div key={index}><Btn customTW="text-sm" onClick={(e) => {
                                props.setCategory('category=' + item.value);
                                handleBtnColorChangeOnClick(e, "category");
                            }}>{item.title}</Btn></div>
                        )
                    })
                }
            </div>
            <div className={`text-3xl`}>Select Difficulty</div>
            <div className={`${styles.difficultyContainer} flex justify-center overflow-hidden mx-auto mb-4`}>
                    <div><Btn customTW="text-sm" onClick={(e) => {
                        props.setDifficulty('difficulty=easy')
                        handleBtnColorChangeOnClick(e, "difficulty")
                        }}>Easy</Btn></div>
                    <div><Btn customTW="text-sm" onClick={(e) => {
                        props.setDifficulty('difficulty=medium')
                        handleBtnColorChangeOnClick(e, "difficulty")
                        }}>Normal</Btn></div>
                    <div><Btn customTW="text-sm" onClick={(e) => {
                        props.setDifficulty('difficulty=hard')
                        handleBtnColorChangeOnClick(e, "difficulty")
                        }}>Hard</Btn></div>
            </div>
        </div>
    )
}