import * as ActionTypes from './ActionTypes';
import AppDispatcher from './AppDispatcher';

export const plus = function (key) {
  AppDispatcher.dispatch({
    type: ActionTypes.PLUS,
    key: key
  });
}
export const minus = function (key) {
  AppDispatcher.dispatch({
    type: ActionTypes.MINUS,
    key: key
  });
}