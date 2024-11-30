"use client";
import styles from './top-loading.module.scss';

import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';

export default function TopLoading() {

    const { isLoading } = useSelector((state: RootState) => state.topLoading);

    return <div className={`${styles.mainContainer} absolute top-0 left-0 h-1 bg-red-500`} style={{ width: isLoading ? '85%' : '0%' }}></div>
}