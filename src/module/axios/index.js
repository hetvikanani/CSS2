import axios from "axios";
// import store from "redux/store";
  export const axiosPost = async (url, data) => {
  try {
    url = url.replace(/[^\x00-\x7F]/g, "");
    let { data: response } = await axios.post(
      "http://35.154.248.138/" + url,
      data
    );
    if (response.ResponseCode !== "200") {
      //   store.dispatch(errorHandler(response));
    }
    // store.dispatch(errorEmpty());
    return response;
  } catch (error) {
    // store.dispatch(errorHandler("Network Error"));
    console.log(error);
  }
};    
export const axiosGet = async (url, data) => {
  try {
    // url = url.replace(/[^\x00-\x7F]/g, "");
    // debugger
    let { data: response } = await axios.get("http://35.154.248.138/" + url);
    if (response.ResponseCode !== "200") {
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};
