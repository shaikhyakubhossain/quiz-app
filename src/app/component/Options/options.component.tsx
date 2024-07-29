"use client";
import { useState, useEffect, useRef } from 'react';
import styles from './options.module.scss';
import { shuffleOptions } from '../../constants/Utils/methods';
import Btn from '../Btn/btn.component';
import { useRouter } from 'next/navigation';

import { useDispatch } from 'react-redux';
import { incrementPoints } from '../../../lib/features/pointsCounter/pointsCounterSlice';


type propsType = {
    correct_answer: string,
    incorrect_answers: string[],
    QuestionNo: number,
    maxQuestions: number
}


export default function Options(props: propsType): JSX.Element {

    const [options, setOptions] = useState<string[] | null>(null);
    let shouldCheckAnswer: boolean = true;

    const optionsContainerRef = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch();
    
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
        let correctAnswerSpan = null;
        // const initialColor = target.style.backgroundColor;

        if(shouldCheckAnswer && options && optionsContainerRef.current){
            shouldCheckAnswer = false;
            for(let i = 0; i < options.length; i++) {

                if(optionsContainerRef.current.childNodes[i].textContent === props.correct_answer){
                    
                    correctAnswerSpan = optionsContainerRef.current.childNodes[i] as HTMLSpanElement
                    break;
                }
            }
            if(target.textContent === props.correct_answer){
                target.style.backgroundColor = correctColor
                dispatch(incrementPoints());
            }
            else if(correctAnswerSpan){
                target.style.backgroundColor = incorrectColor;
                correctAnswerSpan.style.backgroundColor = correctColor;
            }

        }

        
        setTimeout(() => {
            // target.style.backgroundColor = initialColor;
            nextQuestion();
        }, 1500);

    }

    const nextQuestion = () => {


        if(props.maxQuestions >= (props.QuestionNo + 2)){
            router.push('/Question/' + (props.QuestionNo + 2) + window.location.search);
        }

        else{
            
            router.push('/Result');
        }

    }


    return (
        <div className={`${styles.mainContainer} mt-10`}>
            <div className={`${styles.optionsContainer} flex flex-wrap justify-center`} ref={optionsContainerRef}>
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