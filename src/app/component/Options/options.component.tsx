"use client";
import { useState, useEffect } from 'react';
import styles from './options.module.scss';
import { shuffleOptions } from '../../constants/Utils/methods';
import Btn from '../Btn/btn.component';
import { useRouter } from 'next/navigation';



type propsType = {
    correct_answer: string,
    incorrect_answers: string[],
    QuestionNo: number,
    maxQuestions: number
}



export default function Options(props: propsType): JSX.Element {

    const [options, setOptions] = useState<string[] | null>(null);
    const correctColor = "rgb(64, 255, 96)";
    const incorrectColor = "rgb(255, 64, 64)";

    const router = useRouter();
    // const options = props.incorrect_answers;
    // options.push(props.correct_answer);

    useEffect(() => {
        setOptions([...props.incorrect_answers, props.correct_answer]);
    },[props.incorrect_answers, props.correct_answer]);


    const checkAnswer = (event: React.MouseEvent<HTMLSpanElement>) => {
        const target = event.target as HTMLSpanElement;
        const initialColor = target.style.backgroundColor;

        target.textContent === props.correct_answer ? target.style.backgroundColor = correctColor : target.style.backgroundColor = incorrectColor;
        
        setTimeout(() => {
            target.style.backgroundColor = initialColor;
            nextQuestion();
        }, 1000);

    }

    const nextQuestion = () => {
        // router.push('/');
        router.push('/' + (props.maxQuestions >= (props.QuestionNo + 2) ? 'Question/' + (props.QuestionNo + 2) : ''));
    }


    return (
        <div className={`${styles.mainContainer} mt-10`}>
            <div className={`${styles.optionsContainer} flex flex-wrap justify-center`}>
                {
                    options && shuffleOptions(options).map((item, index): JSX.Element => {
                        return (
                            <>
                                <Btn key={index} onClick={checkAnswer}>{item}</Btn>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}