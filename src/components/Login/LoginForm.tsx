import React, { useState } from 'react';
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Divider,
  Typography,
  Box,
  InputLabel,
  Chip,
} from '@mui/material';
import { Visibility, VisibilityOff, Facebook, Google } from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
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
        // mt: '50px'
      }}>
        <Typography variant='h4'>Sign In</Typography>
        <Box sx={{ textAlign: 'left' }}>

          <InputLabel>Email Address</InputLabel>
          <TextField
            placeholder="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              sx: {
                width: { xs: '250px', md: '400px' },
                mb: 5,
                bgcolor: '#F2F2F2'
              },
            }}

          />
          <InputLabel>Password</InputLabel>
          <TextField
            placeholder="Password"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              sx: {
                width: { xs: '250px', md: '400px' },
                bgcolor: '#F2F2F2'

              },
              endAdornment: (
                <Box sx={{ alignItems: 'center', cursor: 'pointer' }} onClick={handleShowPasswordClick}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </Box>
              ),
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', mx: 'auto' }}>

          <FormControlLabel
            componentsProps={{ typography: { fontSize: { xs: '10px', md: '14px' } }, }}
            sx={{ width: '50%' }}
            control={
              <Checkbox
                checked={keepSignedIn}
                onChange={() => setKeepSignedIn(!keepSignedIn)}
              />
            }
            label="Keep me signed in"
          />

          <Typography variant="subtitle1" sx={{ width: '40%', textAlign: 'right', fontSize: { xs: '10px', md: '14px' }, color: '#2F80ED' }}
          >
            <Link href="/forget-password">Forgot Password?</Link>
          </Typography>
        </Box>
        <Button
          
          sx={{ width: { xs: '250px', md: '400px' }, height: '44px', color: 'white'  , bgcolor : '#2F80ED'}}
        >
          Continue with Email
        </Button>

        <Divider style={{ width: '100%' }}>
          <Typography variant='caption'>or use one of these options</Typography>

        </Divider>

        <Button
          variant="outlined"
          startIcon={<Image src={'/google.png'} width={20} height={20} alt='' />}
          sx={{ width: { xs: '250px', md: '400px' }, height: '44px', color: '#4F4F4F' }}
        >
          Continue with Google
        </Button>

        <Button
          variant="contained"
          sx={{ backgroundColor: '#475993', color: 'white', width: { xs: '250px', md: '400px' }, height: '44px' }}
          startIcon={<Image src={'/facebook.png'} width={20} height={20} alt='' />}
        >
          Continue with Facebook
        </Button>

        <Typography variant="body2">
          Don’t have an account? <Link style={{ color: '#2F80ED' }} href="/register">Register</Link>
        </Typography>
      </Box>
    </>
  );
};

export default LoginForm;
