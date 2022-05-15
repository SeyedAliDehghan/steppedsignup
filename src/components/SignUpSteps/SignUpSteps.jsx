import React from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
let steps = [
  {
    stepId: 1,
    stepDescription: "شماره تلفن همراه خود را وارد نمایید",
  },
  {
    stepId: 2,
    stepDescription: "کد فعالسازی ارسال شده به شماره موبایل خود را وارد نمایید",
  },
];
const SignUpSteps = () => {
  const [step, setStep] = useState(1);
  const [error, setError] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [entredCode, setEntredCode] = useState("");

  const validatePhoneNumber = () => {
    const regex = new RegExp("^(\\+0|0098|98|0)?9\\d{9}$");
    regex.test(phoneNumber) ? setError(false) : setError(true);
  };
  const PhoneNumberChangeHandler = (value) => {
    setPhoneNumber(value);
  };
  const stepHandler = (currentStep, action) => {
    if (!error && step === 1) {
      setStep(2)
    }

  };
  const verifyHandler = () => {
    let tmpCode = "1234"
    if(entredCode===tmpCode)console.log("true")

  }
  useEffect(() => {
    validatePhoneNumber()
  }, [phoneNumber])
  return (
    <>
      {step === 1 && (
        <>
          <Box sx={{ width: "100%" }}>
            <Typography sx={{ fontSize: "1.2rem", mb: 2 }}>
              {steps[step - 1].stepDescription}
            </Typography>
            <TextField
              error={error}
              helperText={error && "لطفا شماره موبایل را طبق فرمت صحیح وارد نمایید"}

              value={phoneNumber}
              onChange={(e) => PhoneNumberChangeHandler(e.target.value)}
              sx={{ width: "80%", mb: 2 }}
              label="شماره موبایل"
              variant="outlined"
            />
          </Box>
          <Button
            disabled={error}
            onClick={() => stepHandler()}
            sx={{ width: "80%" }}
            variant="contained"
          >
            مرحله بعد
          </Button>
        </>
      )}
      {step === 2 && (
        <>
          <Box sx={{ width: "100%" }}>
            <Typography sx={{ fontSize: "1.2rem", mb: 2 }}>
              {steps[step - 1].stepDescription}
            </Typography>
            <TextField
              value={entredCode}
              onChange={(e) => setEntredCode(e.target.value)}
              sx={{ width: "80%", mb: 2 }}
              label="کد فعال سازی"
              variant="outlined"
            />
          </Box>
          <Button
            // disabled
            onClick={() => verifyHandler()}
            sx={{ width: "80%" }}
            variant="contained"
          >
            تایید
          </Button>
        </>
      )}
    </>
  );
};

export default SignUpSteps;
