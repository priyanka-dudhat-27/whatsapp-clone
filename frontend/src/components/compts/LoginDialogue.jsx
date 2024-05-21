/* eslint-disable no-unused-vars */
import React from "react";
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const dialogStyles = {
  height: "95%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  marginTop: "12%",
  overflow:"hidden",
};

const Components = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const QRcode = styled("img")({
  width: 350,
  height: 350,
  margin: "50px 0 0 50px",
});

const Title = styled(Typography)`
  font-size: 26px;
  font-family: inherit;
  margin-bottom: 24px;
`;

const ListStyles = styled(List)`
  & > li {
    padding: 0;
    font-size: 28px;
  }
`;
const LoginDialogue = () => {

  const onLoginSucess=(res)=>{
    const decoded=jwtDecode(res.credential)
    console.log(decoded)
  }
  const onLoginError=(res)=>{
    console.log("login failed",res)
  }

  return (
    <div>
      <Dialog open={true} PaperProps={{ sx: dialogStyles }}>
        <Components>
          <Container>
            <Title>To use Whatsapp on your computer</Title>

            <ListStyles>
              <ListItem>1.Open Whatsapp on your phone</ListItem>
              <ListItem>
                2.Tap Menu or Setting and select Linked Device
              </ListItem>
              <ListItem>
                3.Point your phone to this device to capture the code
              </ListItem>
            </ListStyles>
          </Container>
          <Box style={{position:"relative"}}>
            <QRcode
              src="https://www.pngmart.com/files/10/Qr-Code-Background-PNG.png "
              alt=""
            />
            <Box style={{position:"absolute",top:"50%",transform:"translateX(50%)"}}>
                <GoogleLogin onSuccess={onLoginSucess} onError={onLoginError} />
            </Box>
          </Box>
        </Components>
      </Dialog>
    </div>
  );
};

export default LoginDialogue;
