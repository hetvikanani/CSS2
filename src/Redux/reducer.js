import { hasPrefixSuffix } from "antd/lib/input/ClearableLabeledInput";

const initialState = {
  machineData: [],
};
const Machine = (state = initialState, action) => {
  if (action.type === "ADD_MACHINE_DATA") {
    let newData = { ...action.payload, sr: state.machineData.length + 1 };
    return { ...state, machineData: [...state.machineData, newData] };
  } else if (action.type === "DELETE_MACHINEDATA") {
    console.log("delete redux vadu", action);

    let newData = state.machineData.filter(
      (data) => data.id !== action.payload.id
    );

    return { ...state, machineData: newData };
  } else if (action.type === "EDIT_MACHINE_DATA") {
    console.log("edit vadu redux", action);
    let newData = state.machineData.map((data) => {
      if (data.id == action.payload.id) return action.payload;
      else return data;
    });
    return { ...state, machineData: newData };
  } else return state;
};

export default Machine;
