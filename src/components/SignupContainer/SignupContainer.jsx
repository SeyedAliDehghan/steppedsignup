import React from 'react'
import SignUpSteps from '../SignUpSteps/SignUpSteps'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const SignupContainer = ({ text = "123" }) => {
    return (
        <Box
            sx={{
                width: 900,
                height: 600,
                borderRadius: "15px",
                display: "flex"
            }}
        >
            <Box
                sx={{
                    width: "50%",
                    height: "100%",
                    backgroundColor: 'white',
                    borderRadius: "0 15px 15px 0",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center"

                }}>
                <Typography sx={{ color: "#8E24AA", fontSize: "30px", fontWeight: "Bold" }}>فرم ثبت نام</Typography>
                
                <SignUpSteps/>


            </Box>
            <Box
                sx={{
                    display:{xs:'none',md:'grid'},
                    width: "50%",
                    height: "100%",
                    backgroundColor: '#8E24AA',
                    borderRadius: "15px 0 0 15px",
                    // display: "grid",
                    placeItems: "center"
                }}>
                <Box>
                    <Typography sx={{ color: "white", fontSize: "30px" }}>به کنارتو خوش آمدید!</Typography>
                    <Typography sx={{ color: "white", fontSize: "15px" }}>مشخصات خود را برای ثبت نام وارد نمایید!</Typography>
                </Box>
            </Box>

        </Box>
    )
}

export default SignupContainer
