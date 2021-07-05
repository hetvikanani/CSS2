// const actions={
//     LOGIN:'LOGIN'
// }

// export default actions
import * as actions from "./constant";
import{axiosPost} from '../../module/axios'
import { message } from "antd";
export const login = (payload) => async (dispatch) => {
    try {
      debugger
      dispatch({ type: actions.LOGIN_INITIATED });
      let response = await axiosPost("login", payload);
      if (response.id) {
      localStorage.setItem("logs", JSON.stringify(response));
      message.success("Login sucessfully")
      window.location.href="/dashboard"
      } 
      else{
        message.error(response.message)
      }
        dispatch({
          type: actions.LOGIN_ERROR,
          error: response.message,
        });
    } catch (error) {
      console.log(error, "action catch");
      dispatch({
        type: actions.LOGIN_ERROR,
        error: "Network Error",
      });
    }
  };