import { Switch } from "react-router-dom";
import actions from "./action";

const initialState = {
  machineData: [],
  name: "dsfds",
};
const MachineGroup = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_MACHINE_DATA: {
      let newData = { ...action.payload, sr: state.machineData.length + 1 };
      return { ...state, machineData: [...state.machineData, newData] };
    }

    case actions.DELETE_MACHINE_DATA: {
      console.log("delete redux vadu", action);

      let newData = state.machineData.filter(
        (data) => data.id !== action.payload.id
      );

      return { ...state, machineData: newData };
    }
    case actions.EDIT_MACHINE_DATA: {
      console.log("edit vadu redux", action);
      let newData = state.machineData.map((data) => {
        if (data.id == action.payload.id) return action.payload;
        else return data;
      });
      return { ...state, machineData: newData };
    }
    default: {
      return state;
    }
  }
};

export default MachineGroup;
