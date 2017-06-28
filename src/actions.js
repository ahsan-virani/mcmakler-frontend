import {
  LOAD_ADS,
  ADS_LOADED,
  SENDING_REQUEST,
  REQUEST_ERROR,
  CLEAR_ERROR
} from './constants';

export function loadAds() {
  return { type: LOAD_ADS }
}

export function adsLoaded(advertisments) {
  return { type: ADS_LOADED, advertisments }
}

export function sendingRequest(sending) {
  return { type: SENDING_REQUEST, sending }
}

export function requestError(error) {
  return { type: REQUEST_ERROR, error }
}

export function clearError() {
  return { type: CLEAR_ERROR }
}
