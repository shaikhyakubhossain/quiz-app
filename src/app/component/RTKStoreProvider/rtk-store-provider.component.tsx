'use client';
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { store } from '../../../lib/store'

export default function RTKStoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  

  return <Provider store={store}>{children}</Provider>
}