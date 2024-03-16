import { configureStore } from '@reduxjs/toolkit'
import { AuthSliceReducer } from "./Slices"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, AuthSliceReducer);
const store = configureStore({
    reducer: {
        AuthSlice: persistedReducer
    },
})
let persistor = persistStore(store);

export { store, persistor };