import { Box, Button, TextField, Typography, } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import TemporaryDrawer from "./Drawer";
import DrawerCustom from "./Drawer";

const Header: FC = () => {



  return (
    <Box>
      {/* TOP */}
      <Box sx={{
        display: 'flex',
        px: {md : 10 , xs : 3},
        width: '100%',
        height: '68px',
        alignItems: 'center',
        mx: 'auto',
        position : 'fixed',
        zIndex : '111',
        bgcolor  : 'white',
        boxShadow : 3

      }}>
        <Box

          sx={{
            width: { md: '25%', xs: '45%' },
            textAlign: { md: 'left', xs: 'left' },
            cursor: 'pointer'
          }} >
          <Link href={'/'}>
            <Image alt="logo" src={'/logo.png'} height={24} width={159} />

          </Link>

        </Box>
        <Box
          sx={{
            width: '50%',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-evenly',
            visibility: { md: 'visible', xs: 'hidden' }
          }}
        >

          <Typography>Home</Typography>
          <Typography>Discover</Typography>
          <Typography>Activities</Typography>
          <Typography>About</Typography>
          <Typography>Contact</Typography>



        </Box>
        <Box
          sx={{
            width: '25%',
            display: 'flex',
            justifyContent : 'flex-end'
          }}
        >
          <Box sx={{display : {md : 'block' , xs : 'none'}}}>
            <Button href="/login" variant="contained" sx={{ bgcolor :'#2F80ED'}}>Sign in</Button>
            <Button href="/register" sx={{ mx: 1 }} variant='outlined'>Register</Button>
          </Box>
          <Box sx={{display : {md : 'none' , xs : 'block'} , mr : 5}}>
            <DrawerCustom/>
          </Box>



        </Box>
      </Box>
    </Box>
  )

}


export default Header