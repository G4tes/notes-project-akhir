import { encryptTransform } from 'redux-persist-transform-encrypt';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { notesSlice } from './slices/notesSlice';
import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';

const encryptor = encryptTransform({
  secretKey: '73e358b5a93496aa11d8a2276e035eae90764c1aa3e9551f8e2e78b0eb3a0b10', // key untuk enkripsi
  onError: function (error) {
    console.error('Error while encrypting:', error);
  },
});

const persistConfig = {
  key: 'root',
  storage,
  transforms: [encryptor],
};

const persistedReducerNotes = persistReducer(persistConfig, notesSlice.reducer);

export const store = configureStore({
  reducer: {
    notesSlice: persistedReducerNotes,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
