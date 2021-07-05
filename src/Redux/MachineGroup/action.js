const actions = {
  ADD_MACHINE_DATA: "ADD_MACHINE_DATA",
  DELETE_MACHINE_DATA: "DELETE_MACHINE_DATA",
  EDIT_MACHINE_DATA: "EDIT_MACHINE_DATA",

  addData:(data)=>({type:actions.ADD_MACHINE_DATA,payload:data}),
  editData:(data)=>({type:actions.EDIT_MACHINE_DATA,payload:data}),
  deleteData:(data)=>({type:actions.DELETE_MACHINE_DATA,payload:data}),


  
};



export default actions;