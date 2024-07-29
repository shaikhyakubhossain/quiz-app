"use client";
import styles from './start-btn.module.scss';
import Btn from '../Btn/btn.component';
import { useRouter } from 'next/navigation';

import { useDispatch } from 'react-redux';
import { resetTime } from '../../../lib/features/mainTimer/mainTimerSlice';
import { resetPoints } from '../../../lib/features/pointsCounter/pointsCounterSlice';


type propsType = {
    children: string
    url: string,
    customTW?: string,
    customBgColor?: string
}

export default function ResetStatesAndRouteChangeBtn(props: propsType): JSX.Element {

    const router = useRouter();
    const dispatch = useDispatch();

    const handleResetStatesAndRouteChangeOnBtnClick = (url: string) => {

        dispatch(resetTime());
        dispatch(resetPoints());
        
        router.push(url);

    }

    return (
        <>
            <Btn onClick={() => handleResetStatesAndRouteChangeOnBtnClick(props.url)} customTW={props.customTW} customBgColor={props.customBgColor} >{props.children}</Btn>
        </>
    )
}