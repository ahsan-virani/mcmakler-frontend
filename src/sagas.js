import { call, put, takeLatest } from 'redux-saga/effects';

import {
  LOAD_ADS,
} from './constants';

import { sendingRequest, clearError, requestError, adsLoaded } from './actions';

import adsService from './api/advertisments';

function* loadAds() {
  try {
    yield put(clearError());
    yield put(sendingRequest(true));
    const adsResponse = yield call(adsService);
    if (adsResponse) {
      console.log('adsResponse', adsResponse);
      yield put(adsLoaded(adsResponse));
      yield put(clearError());
      yield put(sendingRequest(false));
    } else {
      yield put(sendingRequest(false));
      yield put(requestError('Request returned nothing'));
    }
  } catch (e) {
    return yield put(requestError(e));
  }
}

function* watchLoadAds() {
  yield takeLatest(LOAD_ADS, loadAds);
}

export default watchLoadAds;
