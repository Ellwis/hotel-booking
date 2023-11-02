import Link from 'next/link'
import React, { useState } from 'react'
import { Box, Button, Divider, InputLabel, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import { enqueueSnackbar } from 'notistack'

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(0)
  const EmailReq = () => {
    if (!email.includes('@')) {
      enqueueSnackbar('Your Email is Wrong ', { variant: 'error' })
    } else if (email.length === 0 && email.length < 5) {
      enqueueSnackbar('Email is requierd', { variant: 'error' })
    } else {
      enqueueSnackbar('Email has sent successfully', { variant: 'success' })
      setStep(step + 1)




    }
  }

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
          width: { xs: '250px', md: '400px' },
          mx: 'auto',
        }}>
          <Typography variant='h4'>Forgot your password?</Typography>
          <Typography color={'#4F4F4F'} textAlign={'center'}>We’ll send you a link to reset it. Enter your email address used for My Dream Place</Typography>
          <Box sx={{ textAlign: 'left' }}>

            <InputLabel>Email</InputLabel>
            <TextField
              placeholder="Please enter your Email"
              variant="outlined"
              type={'email'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                sx: {
                  width: { xs: '250px', md: '400px' },
                  bgcolor: '#F2F2F2',

                },
              }}
            />
            <Typography variant="subtitle1" sx={{ textAlign: 'right', fontSize: { xs: '10px', md: '14px' }, color: '#2F80ED' }}
            >
              <Link href="/login">Return to login</Link>
            </Typography>



            <Button
              onClick={() => EmailReq()}
              sx={{ mt: 5, width: { xs: '250px', md: '400px' }, height: '44px', color: 'white', bgcolor: '#2F80ED' }}
            >
              Create account
            </Button>
          </Box>


          <Typography variant="body2">
            By creating an account, you agree with our <Link style={{ color: '#2F80ED' }} href="/login">Terms and Conditions and Privacy Statement </Link>
          </Typography>
        </Box>
      </Box>


    )

  } else if (step === 1) {
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
          width: { xs: '250px', md: '400px' },
          mx: 'auto',
        }}>
          <Image src={'/msg.png'} width={280} height={250} alt='' />
          <Typography variant='h4'>Check your Inbox</Typography>
          <Typography>We have just emailed you the instrustions and a reset password link to {email} It might take a few minutes to arrive</Typography>
          <Button
          href='/login'
            sx={{ width: { xs: '250px', md: '400px' }, height: '44px', color: 'white', bgcolor: '#2F80ED', mt: 5 }}
          >
            Return to login
          </Button>


        </Box>
      </Box>
    )


  }
}

export default ForgetPassword