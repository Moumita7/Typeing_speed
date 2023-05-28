import {  applyMiddleware, legacy_createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import { TypeingMiddle } from './saga';


const sagaMiddleware = createSagaMiddleware();
export const store = legacy_createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(TypeingMiddle);