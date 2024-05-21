/* eslint-disable no-unused-vars */
import React from 'react'
import Messanger from './components/Messanger'
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
const clientid="516385859283-oefnnvsul5i72706jl4akagkt3memi6k.apps.googleusercontent.com"

  return (
    <GoogleOAuthProvider clientId={clientid}>
      <Messanger/>
    </GoogleOAuthProvider>
  )
}

export default App