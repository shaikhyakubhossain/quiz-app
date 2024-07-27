'use client';
import { Provider } from 'react-redux'
import { store } from '../../../lib/store'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

export default function RTKStoreProvider({
  children,
}: {
  children: React.ReactNode
}) {

  const persistor = persistStore(store)
  

  return (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    {children}
    </PersistGate>
  </Provider>
  )
  
}