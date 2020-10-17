import {all, takeEvery, put} from 'redux-saga/effects';

export function* helloSaga() {
  console.log('hello saga');
}

export function* doSomething() {
  console.log('do something');
}

export function* watchIncrement() {
  yield takeEvery('counter/increment', doSomething);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrement()]);
}
