import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer';
import TodoSagas from'./sagas'

const sagaMiddleware = createSagaMiddleware()

//创建store
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(TodoSagas)


export default store;
