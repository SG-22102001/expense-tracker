import React from 'react'
import Header from '../components/Header'
import SignupSignincomp from '../components/SignupSignin'

function Signup() {
  return (
    <div>
      <Header/>
      <div className="wrapper">
        <SignupSignincomp />
      </div>
    </div>
  )
}

export default Signup
