import React from 'react'
import "./user.scss"
import Single from '../../components/single/Single'
import { singleUser } from '../../data'

const User = () => {
    //fetch data adn send to a single component
  return (
    <div className='user'>
        <Single {...singleUser}/>
      
    </div>
  )
}

export default User
