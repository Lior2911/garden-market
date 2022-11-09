import React from 'react'
import { useUserAuth } from '../../../contexts/UserAuthContext';

 const Home = () => {
  const {user }= useUserAuth()
  return (
   <h1> Wellcome Home , {user && user.mail}</h1>
  )
}
export default Home ; 
