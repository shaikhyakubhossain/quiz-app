import styles from './question-settings.module.scss'
import Btn from '../Btn/btn.component';
import { categoriesList } from '@/app/constants/Utils/questionQuery';

type propsType = {
    setCategory: (category: string) => void,
    setDifficulty: (difficulty: string) => void

}

export default function QuestionSettings(props: propsType): JSX.Element {
    return (
        <div className={`${styles.mainContainer}`}>
            <div className={`text-3xl`}>Select Category</div>
            <div className={`${styles.categoryContainer} flex justify-center flex-wrap `}>
                {
                    categoriesList.map((item, index): JSX.Element => {
                        return(
                            <div key={index}><Btn customTW="text-sm" onClick={() => props.setCategory('category=' + item.value)}>{item.title}</Btn></div>
                        )
                    })
                }
            </div>
            <div className={`text-3xl`}>Select Difficulty</div>
            <div className={`${styles.difficultyContainer} flex justify-center overflow-hidden mx-auto mb-4`}>
                    <div><Btn customTW="text-sm" onClick={() => props.setDifficulty('difficulty=easy')}>Easy</Btn></div>
                    <div><Btn customTW="text-sm" onClick={() => props.setDifficulty('difficulty=medium')}>Normal</Btn></div>
                    <div><Btn customTW="text-sm" onClick={() => props.setDifficulty('difficulty=hard')}>Hard</Btn></div>
            </div>
        </div>
    )
}