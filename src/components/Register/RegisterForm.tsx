import React, { useState } from 'react';
import {
  TextField,
  Button,
  Divider,
  Typography,
  Box,
  InputLabel,
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { enqueueSnackbar } from 'notistack';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const RegisterForm = () => {

  //regex password 

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;

  //states
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(0)


  //functions
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const EmailReq = () => {
    if (!email.includes('@')) {
      enqueueSnackbar('Your Email is Wrong ', { variant: 'error' })
    } else if (email.length === 0 && email.length < 5) {
      enqueueSnackbar('Email is requierd', { variant: 'error' })
    } else {
      setStep(step + 1)


    }
  }


  const CreateAccount = () => {

    if(!passwordRegex.test(password)){
      enqueueSnackbar(`Wrong password`, { variant: 'error' })

    } else {
      enqueueSnackbar('Your Account has created' , {variant :'success'})


    }
  }
  const PrevStep = () => {
    setStep(step - 1)

  }


  //conditional rendering 

  if (step === 0) {
    return (
      <Box>
        <Box p={'20px 30px'} width={'100%'}>
          <Link href={'/'}>
            <Image src={'/logo.png'} width={159} height={24} alt='' />
          </Link>
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          width: { xs: '280px', md: '400px' },
          mx: 'auto',
          // mt: '50px'
        }}>
          <Typography variant='h4'>Register</Typography>
          <Box sx={{ textAlign: 'left' }}>

            <InputLabel>Email Address</InputLabel>
            <TextField
              placeholder="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                sx: {
                  width: { xs: '280px', md: '400px' },
                  mb: 5,
                  bgcolor:  '#F2F2F2'
                },
              }}

            />
            <Button
              onClick={() => EmailReq()}
              sx={{ width: { xs: '280px', md: '400px' }, height: '44px', color: 'white', bgcolor: '#2F80ED' }}
            >
              Continue with Email
            </Button>
          </Box>
          <Divider style={{ width: '100%' }}>
            <Typography variant='caption'>or use one of these options</Typography>

          </Divider>

          <Button
            variant="outlined"
            startIcon={<Image src={'/google.png'} width={20} height={20} alt='' />}
            sx={{ width: { xs: '280px', md: '400px' }, height: '44px', color: '#4F4F4F' }}
          >
            Continue with Google
          </Button>

          <Button
            variant="contained"
            sx={{ backgroundColor: '#475993', color: 'white', width: { xs: '280px', md: '400px' }, height: '44px' }}
            startIcon={<Image src={'/facebook.png'} width={20} height={20} alt='' />}
          >
            Continue with Facebook
          </Button>

          <Typography variant="body2">
            Already have an account? <Link style={{ color: '#2F80ED' }} href="/login"> Sign in</Link>
          </Typography>
        </Box>
      </Box>

    )
  } else if (step === 1)
    return (


      <Box>
        <Box p={'20px 30px'} width={'100%'}>
          <Link href={'/'}>
            <Image src={'/logo.png'} width={159} height={24} alt='' />
          </Link>
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          width: { xs: '280px', md: '400px' },
          mx: 'auto',
        }}>
          <Typography variant='h4'>Create Password</Typography>
          <Typography color={'#4F4F4F'} textAlign={'center'}>Use a minimum of 10 characters, including letters, lowercase letters, and numbers.</Typography>
          <Box sx={{ textAlign: 'left' }}>

            <InputLabel>Password</InputLabel>
            <TextField
              placeholder="Please enter your Password"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                sx: {
                  width: { xs: '280px', md: '400px' },
                  bgcolor:'#F2F2F2' ,
                  mb: 3

                },
                endAdornment: (
                  <Box sx={{ alignItems: 'center', cursor: 'pointer' }} onClick={handleShowPasswordClick}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </Box>
                ),
              }}
            />
            <InputLabel>repeat Password</InputLabel>
            <TextField
              placeholder="please enter your Password again"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              InputProps={{
                sx: {
                  width: { xs: '280px', md: '400px' },
                  bgcolor:'#F2F2F2' ,


                },
                endAdornment: (
                  <Box sx={{ alignItems: 'center', cursor: 'pointer' }} onClick={handleShowPasswordClick}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </Box>
                ),
              }}
            />
            <Button
              onClick={() => CreateAccount()}
              sx={{ mt: 5, width: { xs: '280px', md: '400px' }, height: '44px', color: 'white', bgcolor: '#2F80ED' }}
            >
              Create account
            </Button>
          </Box>


          <Typography variant="body2">
            By creating an account, you agree with our <Link style={{ color: '#2F80ED' }} href="/login">Terms and Conditions and Privacy Statement </Link>
          </Typography>
          <Button onClick={() => PrevStep()}>
            <ArrowBackIcon />
          </Button>
        </Box>
      </Box>

    );
};

export default RegisterForm;
