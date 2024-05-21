/* eslint-disable no-unused-vars */
import React from 'react'
import LoginDialogue from './compts/LoginDialogue'
import {AppBar,Toolbar,styled,Box} from '@mui/material';

const Messanger = () => {
    const Component=styled(Box)`
    height:100vh;
    width:100vw;
    background:#dcdcdc`

    const Header=styled(AppBar)`
    height:250px;
    background-color:#00a884;
    box-shadow:none`
  return (
    <Component>
        <Header>
            <Toolbar></Toolbar>
        </Header>
        <LoginDialogue/>
    </Component>
  )
}

export default Messanger