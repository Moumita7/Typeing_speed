import {  finishTypeing } from './action';
import {  START_TYPEING } from './actionTypes';
import { put, takeEvery, delay } from 'redux-saga/effects';

function* TypeingTimmer() {
  yield delay(300000); 
  yield put(finishTypeing());
}
export function* TypeingMiddle() {
  yield takeEvery(START_TYPEING, TypeingTimmer);
}
