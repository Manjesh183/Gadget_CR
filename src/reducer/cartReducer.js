export const cartReducer=(state,action)=>{
    const {type,payload}=action; //action has two things type,payload which is used by dispatch to update stuff
    switch(type){
        case "ADD_TO_CART":
            return {...state,cartList:payload.items}
//keeping other state's val as it is & updating cartList only
        case "REMOVE_FROM_CART":
            return {...state,cartList:payload.items}
        case "UPDATE_TOTAL":
                return {...state,total:payload.total}
        default:
            throw new Error("No case found in cartReducer")
    }
}
//dispatch handles all these cases
//rducer accepts state and action & reducer returning new state(line 5)