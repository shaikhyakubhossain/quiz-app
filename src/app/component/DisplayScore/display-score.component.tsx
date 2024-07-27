"use client";
import styles from './display-score.module.scss';
import Btn from "@/app/component/Btn/btn.component";
import MenuOptions from "@/app/component/MenuOptions/menu-options.component";
import { displayTime } from '@/app/constants/Utils/methods';
import { useRouter } from 'next/navigation';

import { RootState } from '../../../lib/store';
import { useSelector, useDispatch } from 'react-redux';
import { resetTime } from '@/lib/features/mainTimer/mainTimerSlice';



type propsType = {

}

export default function DisplayScore(props: propsType): JSX.Element {

    const time = useSelector((state: RootState) => state.mainTimer.time);
    const dispatch = useDispatch();

    const router = useRouter();

    const handleRouteChangeOnBtnClick = (url: string) => {

        dispatch(resetTime());
        
        router.push(url);

    }

    return (
        <div className={`${styles.mainContainer}`}>
            <MenuOptions>
                <div className={`text-3xl`} >Time Taken: {displayTime(time)}</div >
                <div><Btn onClick={() => handleRouteChangeOnBtnClick('/Question/1')}>Try Again</Btn></div>
                <div><Btn onClick={() => handleRouteChangeOnBtnClick('/')}>Home</Btn></div>
            </MenuOptions>
            
        </div>
    )
} 