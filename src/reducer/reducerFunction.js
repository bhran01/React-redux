import { ADDBYONE, RESET, SUBTRACTBYONE } from "./actions/constants";

export let rootReducer=(oldState,action)=>{
    let newState =oldState
    switch(action.type){
      case ADDBYONE:
        return {...oldState,value:oldState.value+ action.payload};
      case SUBTRACTBYONE:
        return {...oldState,value:oldState.value-action.payload}
      case RESET:
        return {...oldState,value:action.payload}  
      default:
        return newState;
    }
  }