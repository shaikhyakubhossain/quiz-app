"use client";
import { useEffect } from 'react';
import styles from './main-timer.module.scss';
import { displayTime } from '../../constants/Utils/methods';

import type { RootState } from '../../../lib/store';
import { useSelector, useDispatch } from 'react-redux';
import { incrementTime } from '../../../lib/features/mainTimer/mainTimerSlice';

type propsType = {

}

export default function MainTimer(props: propsType): JSX.Element {

    // const [seconds, setSeconds] = useState(useSelector((state: RootState) => state.mainTimer.time));

    const seconds = useSelector((state: RootState) => state.mainTimer.time);

    const dispatch = useDispatch();

    let timerId: any = null;

        useEffect(() => {

          timerId = setInterval(() => {
            // setSeconds(seconds => seconds + 1);
            
            dispatch(incrementTime());
          }, 1000);

          return () => {
            clearInterval(timerId);
          };
        }, []);
        
    return (
        <div className={`${styles.mainContainer}`}>
          {displayTime(seconds)} T
        </div>
    )
}