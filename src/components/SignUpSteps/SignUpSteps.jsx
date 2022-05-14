import React from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

let steps = [{
    currentstep: 1,
    step: [{
        stepId: 1,
        description: "شماره موبایل خود را وارد نمایید"
    }, { stepId: 2, description: "کد ارسال شده به شماره تلفن خود را وارد نمایید" }]
}]
const SignUpSteps = () => {
    // switch (currentstep) {
    //     case 1: return (
    //         <Box>
    //             <TextField sx={{ width: "80%", mb: 2 }} label="نام" variant="outlined" />
    //             <TextField sx={{ width: "80%", mb: 2 }} label="نام خانوادگی" variant="outlined" />
    //             <TextField sx={{ width: "80%", mb: 2 }} label="شماره موبایل" variant="outlined" />
    //             <TextField sx={{ width: "80%" }} label="رمز عبور" variant="outlined" />
    //         </Box>
    //     )
    // }
    return (
        <>
            {steps.map(step => (
                steps[0].currentstep == 1 && 
                <Box key={step.stepId} sx={{width:"100%"}}>
                    <Typography>{step.description}</Typography>
                    <TextField sx={{ width: "80%", mb: 2 }} label="شماره موبایل" variant="outlined" />
                </Box>
                
            ))}
        </>
    )
}

export default SignUpSteps
