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
      <div className='h-screen flex justify-center items-center'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-r-2 border-gray-900'></div>
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