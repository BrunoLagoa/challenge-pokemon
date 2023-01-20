import { combineReducers } from 'redux';

import pokemon from './pokemon';
import modal from './modal';

const rootReducer = combineReducers({
  pokemon,
  modal,
});

export type ReduxStore = ReturnType<typeof rootReducer>;

export default rootReducer;
