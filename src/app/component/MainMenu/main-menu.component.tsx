"use client";
import { useState } from 'react';
import styles from './main-menu.module.scss';
import ResetStatesAndRouteChangeBtn from '../ResetStatesAndRouteChangeBtn/reset-states-and-route-change-btn.component';
import QuestionSettings from '../QuestionSettings/question-settings.component';



type startQuizQueryType = {
    category: string,
    difficulty: string
}
export default function MainMenu(): JSX.Element {


    const [startQuizQuery, setStartQuizQuery] = useState<startQuizQueryType>({
        category: 'category=27',
        difficulty: 'difficulty=easy'
    });

    const setCategory = (categoryToSet: string) => {
                console.log(categoryToSet);
                
                setStartQuizQuery({
                    ...startQuizQuery,
                    category: categoryToSet
                });
    }

    const setDifficulty = (DifficultyToSet: string) => {
                console.log(DifficultyToSet);

                setStartQuizQuery({
                    ...startQuizQuery,
                    difficulty: DifficultyToSet
                });
    }

    return (
        <div className={`${styles.mainContainer} text-center mt-12`}>
            <QuestionSettings setCategory={setCategory} setDifficulty={setDifficulty} />
            <ResetStatesAndRouteChangeBtn customBgColor='#61FFDB' url={'/Question/1?' + startQuizQuery.category + '&' + startQuizQuery.difficulty}>Start Quiz</ResetStatesAndRouteChangeBtn>
        </div>
    )
}