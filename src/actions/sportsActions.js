/**
 * Created by sravankumarganji on 9/28/17.
 */
import * as types from './actionTypes'

export function createCourse(course) {
  return {
    type : types.CREATE_COURSE , course
  }
}
