import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const serializableCheck = { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] };
const persistContactsConfig = { key: 'contacts', storage };
const persistContactsReducer = persistReducer(persistContactsConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistContactsReducer,
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck }),
});

export const persistor = persistStore(store);
