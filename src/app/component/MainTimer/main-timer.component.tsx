"use client";
import { useState, useEffect, useRef } from 'react';
import styles from './main-timer.module.scss';
import { displayTime } from '../../constants/Utils/methods';



type propsType = {

}

export default function MainTimer(props: propsType): JSX.Element {

    const [seconds, setSeconds] = useState(0);

    let timerId: any = null;

        useEffect(() => {

          timerId = setInterval(() => {
            setSeconds(seconds => seconds + 1);
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