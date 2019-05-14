/**
 * Created by LannyCodes on 2019/5/12
 */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import mainReducer from '../reducer';
// import {persistReducer, persistStore} from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import promiseMiddleware from 'redux-promise';
const loggerMiddleware = createLogger();

// const persistConfig = {
//     key: 'root',
//     storage,
//     blacklist: ['homeListData'] // 黑名单
// };
// const persistedReducer = persistReducer(persistConfig, mainReducer);
// const enhancer = applyMiddleware(thunk, loggerMiddleware);
//
// const initialState = {
//     loginReducer: {
//         userLogin: {
//             isFetching: true,
//             data: {username: 'xxx', password: 'xxxxx'}
//         }
//
//     }
// };
// export const store = createStore(persistedReducer, initialState, enhancer);
// export const persistor = persistStore(store);


// let store = createStoreWithThunk(mainReducer);
const store = createStore(
    mainReducer,
    // applyMiddleware(promiseMiddleware, loggerMiddleware)
    applyMiddleware(thunk, loggerMiddleware)
);

export default store;


