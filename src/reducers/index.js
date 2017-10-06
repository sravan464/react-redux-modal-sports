/**
 * Created by sravankumarganji on 9/28/17.
 */
import {combineReducers} from 'redux';
import modal from './modalReducer';
import counter from './counterReducer'

const rootReducer = combineReducers({
  modal,
  counter
});

export default rootReducer;
