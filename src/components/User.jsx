import React from 'react'
import {useParams} from 'react-router-dom' 

const User = () => {
    const Params = useParams() 
  return (
    <div>
      I am user {Params.username}
    </div>
  )
}

export default User
