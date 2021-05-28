const reducer = (state, actions) =>{
  switch(actions.type){
    case "SET_NEW":
      return { ...state , newsList:actions.payload }
    
    default:
      return state
  }
};

export default reducer;