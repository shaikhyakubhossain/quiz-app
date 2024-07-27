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

  const loading = () => {
    return (
      <div className='text-center text-3xl py-56'>
        <div>Restoring session...</div>
        <div>Please wait while we load your data...</div>
        <div>persisted state is being rehydrated.</div>
      </div>
    )
  }
  

  return (
  <Provider store={store}>
    <PersistGate loading={loading()} persistor={persistor}>
    {children}
    </PersistGate>
  </Provider>
  )
  
}