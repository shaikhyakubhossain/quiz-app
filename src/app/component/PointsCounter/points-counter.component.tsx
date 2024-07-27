"use client";
import styles from './points-counter.module.scss'

import { RootState } from '../../../lib/store';
import { useSelector } from 'react-redux';


type propsType = {

}

export default function PointsCounter(props: propsType): JSX.Element {

    const points = useSelector((state: RootState) => state.pointsCounter.points)

    return (

        <div className={`${styles.mainContainer} `}>
            {points} Points
        </div>
    )
}