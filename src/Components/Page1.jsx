import { useContext } from "react";
import MsgContexts from "../context/MsgContext";


const Page1 = () => {

  const {msgstate, dispatch} = useContext(MsgContexts)


  return (

    <div>
      <>
       <div className="container">
            <div className="row justify-content-center my-5">
                <div className="col-md-5">
                <div className="form-group">
                    <div className="card">
                    <div className="card-body">

                        <input type="text" value={msgstate} className="form-control" onChange={e => dispatch({type : 'MSG_UPDATE' , payload : e.target.value})}/>

                        <h4>{msgstate}</h4>
                        
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </>
    </div>
  )
}

export default Page1;
