import * as actions from "./constant";
import { axiosGet } from "../../module/axios";


export const getHeadquater = () => async (dispatch) => {
    try {
      // debugger;
      let local = JSON.parse(localStorage.logs);
      let id = local.adminId;
      dispatch({ type: actions.GET_HEADQUATER_INITIATED });
      let response = await axiosGet("headquarter/id/" + id);
      if (response.ResponseCode !== 200) {
        dispatch({
          type: actions.GET_HEADQUATER_ERROR,
          error: response,
        });
      } else {
        dispatch({
          type: actions.GET_HEADQUATER_SUCCESS,
          payload: response,
        });
        // message.error(response.message)
      }
    } catch (error) {
      console.log(error, "action catch");
      dispatch({
        type: actions.GET_HEADQUATER_ERROR,
        error: "Network Error",
      });
    }
  };