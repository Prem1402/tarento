import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import FelxiReducer from './FelxiReducer';

const rootReducer = combineReducers({
  router,
  FelxiReducer
});

export default rootReducer;
