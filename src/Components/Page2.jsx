import React, { useContext } from 'react'
import MsgContexts from '../context/MsgContext'

const Page2 = () => {

  const {msgstate} = useContext(MsgContexts)
  return (
    <>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <hr />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, cupiditate!</p>
              <h2>{msgstate}</h2>
            </div>
          </div>
        </div>
    </>
  )
}

export default Page2