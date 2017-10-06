/**
 * Created by sravankumarganji on 9/28/17.
 */
export default function modalReducer (state ={isModalOpen:false},action) {
  switch (action.type){
    case 'OPEN_MODAL' :
      return Object.assign({},action.payload)
    case 'CLOSE_MODAL' :
      return Object.assign({},action.payload)
    default :
      return state;
  }
}
