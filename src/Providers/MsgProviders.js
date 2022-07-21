import { useReducer } from "react";
import MsgContexts from "../context/MsgContext"
import { initital, msgReducer } from "../Reducer/MsgReducer";




const MsgcontextProvider = ({children}) => {

    // use reducer

    const [msgstate, dispatch] = useReducer(msgReducer, initital)

    return (

        <MsgContexts.Provider value={{msgstate, dispatch}}>
                {children}
        </MsgContexts.Provider>
    )
}

export default MsgcontextProvider;