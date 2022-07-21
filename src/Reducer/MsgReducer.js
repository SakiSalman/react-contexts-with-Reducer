



export const initital = 'Bangladesh';


export const msgReducer = (state, {type, payload}) => {

   switch (type) {
    case 'MSG_UPDATE':
        return payload

   
    default:
        return state
   }
    
}



