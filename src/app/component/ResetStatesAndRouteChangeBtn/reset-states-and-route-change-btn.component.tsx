"use client";
import Btn from '../Btn/btn.component';
import { useRouter } from 'next/navigation';

import { useDispatch } from 'react-redux';
import { resetTime } from '../../../lib/features/mainTimer/mainTimerSlice';
import { resetPoints } from '../../../lib/features/pointsCounter/pointsCounterSlice';
import { setLoadingTrue } from '@/lib/features/topLoading/topLoadingSlice';


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

        dispatch(setLoadingTrue());
        dispatch(resetTime());
        dispatch(resetPoints());
        router.push(url);

    }

    return <Btn onClick={() => props.url !== window.location.pathname && handleResetStatesAndRouteChangeOnBtnClick(props.url)} customTW={props.customTW} customBgColor={props.customBgColor} >{props.children}</Btn>
}