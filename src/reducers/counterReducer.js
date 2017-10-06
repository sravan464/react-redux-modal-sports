/**
 * Created by sravankumarganji on 10/5/17.
 */


export default function counterReducer (state ={counter:3},action) {
  switch (action.type){
    case 'ADD_COUNTER' :
      return Object.assign({},action.payload)
    default :
      return state;
  }
}
