import * as actions from "./constant";
import {axiosGet, axiosPost} from '../../module/axios'

// const actions={
//     ADD_MACHINE:"ADD_MACHINE",



//   addData:(data)=>({type:actions.ADD_MACHINE,payload:data}),

// }

export const getMachine = () => async (dispatch) => {
    try {
        let local=JSON.parse(localStorage.logs);
        let id= local.adminId;
        dispatch({ type: actions.GET_MACHINE_INITIATED });
        let response = await axiosGet("machine/id/"+id);        
      if (response.ResponseCode!==200) {
        dispatch({
            type: actions.GET_MACHINE_ERROR,
            error: response,
          });
      } 
      else{
        dispatch({
            type: actions.GET_MACHINE_SUCCESS,
            payload: response,
          });
        // message.error(response.message)
      }
        
    } catch (error) {
      console.log(error, "action catch");
      dispatch({
        type: actions.GET_MACHINE_ERROR,
        error: "Network Error",
      });
    }
  };

export const postMachine = (payload) => async (dispatch) => {

  try {
    // let local=JSON.parse(localStorage.logs);
    // let id= local.adminId;
    dispatch({ type: actions.POST_MACHINE_INITIATED });
    let response = await axiosPost("machine/id/",payload);        
  if (response.ResponseCode!==200) {
    dispatch({
        type: actions.POST_MACHINE_ERROR,
        error: response,
      });
  } 
  else{
    dispatch({
        type: actions.POST_MACHINE_SUCCESS,
        payload: response,
      });
    // message.error(response.message)
  }
    
} catch (error) {
  console.log(error, "action catch");
  dispatch({
    type: actions.POST_MACHINE_ERROR,
    error: "Network Error",
  });
}
}

   
  

  
// export default actions;