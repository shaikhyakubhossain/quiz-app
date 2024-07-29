"use client";
import styles from './display-score.module.scss';
import MenuOptions from "@/app/component/MenuOptions/menu-options.component";
import { displayTime } from '@/app/constants/Utils/methods';
import ResetStatesAndRouteChangeBtn from '../ResetStatesAndRouteChangeBtn/reset-states-and-route-change-btn.component';
import { useSearchParams } from 'next/navigation';

import { RootState } from '../../../lib/store';
import { useSelector } from 'react-redux';



type propsType = {

}

export default function DisplayScore(props: propsType): JSX.Element {

    const time = useSelector((state: RootState) => state.mainTimer.time);
    const score = useSelector((state: RootState) => state.pointsCounter.points);
    const maxPoints = useSearchParams().get('maxPoints');

    return (
        <div className={`${styles.mainContainer}`}>
            <MenuOptions>
                <div className={`text-3xl`} >Your Score: {score}/ {maxPoints} </div >
                <div className={`text-3xl`} >Time Taken: {displayTime(time)}</div >
                <div><ResetStatesAndRouteChangeBtn url={'/Question/1'}>Try Again</ResetStatesAndRouteChangeBtn></div>
                <div><ResetStatesAndRouteChangeBtn url={'/'}>Home</ResetStatesAndRouteChangeBtn></div>
            </MenuOptions>
            
        </div>
    )
} 