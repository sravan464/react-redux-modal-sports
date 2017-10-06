/**
 * Created by sravankumarganji on 10/5/17.
 */
import * as types from './actionTypes'

export function addCounter(payload) {
  return {
    type : types.ADD_COUNTER ,payload
  }
}
