import * as actions from "./Constant";
import { axiosGet } from "../../module/axios";


export const getState = () => async (dispatch) => {
    try {
      // debugger;
    //   let local = JSON.parse(localStorage.logs);
    //   let id = local.adminId;
      dispatch({ type: actions.GET_STATE_INITIATED });
      let response = await axiosGet("city");
      if (response.ResponseCode !== 200) {
        dispatch({
          type: actions.GET_STATE_ERROR,
          error: response,
        });
      } else {
        dispatch({
          type: actions.GET_STATE_SUCCESS,
          payload: response,
        });
         
      }
    } catch (error) {
      console.log(error, "action catch");
      dispatch({
        type: actions.GET_STATE_ERROR,
        error: "Network Error",
      });
    }
  };