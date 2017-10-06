/**
 * Created by sravankumarganji on 9/28/17.
 */
import * as types from './actionTypes'

export function openModal(payload) {
  return {
    type : types.OPEN_MODAL ,payload
  }
}

export function closeModal(payload) {
  return {
    type : types.CLOSE_MODAL, payload
  }
}
