import { EventEmitter } from 'events';
import * as ActionTypes from '../ActionTypes';
import AppDispatcher from '../AppDispatcher';
const CHANGE_EVENT = 'changed';

const values = {
  first: 220,
  second: 10,
  third: 20,
}

const CounterStore = Object.assign({}, EventEmitter.prototype, {
  getValues: function () {
    return values;
  },
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

CounterStore.dispatchToken = AppDispatcher.register((action) => {
  if (action.type === ActionTypes.PLUS) {
    values[action.key.toLowerCase()]++;
    CounterStore.emitChange();
  } else if (action.type === ActionTypes.MINUS) {
    values[action.key.toLowerCase()]--;
    CounterStore.emitChange();
  }
});

export default CounterStore;