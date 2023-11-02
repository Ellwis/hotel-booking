import { MobileDetector } from "@/hooks/MobileDetector"
import { Box, Button, TextField, Typography } from "@mui/material"
import Image from "next/image"
import { FC } from "react"

const Footer: FC = () => {

  return (
    <Box sx={{
      mt: 5,
      p: 5,
    }}>
      <Box
        sx={{
          width: '90%',
          mx : 'auto' ,
          display: { md: 'flex', xs: 'block' },
          justifyContent: 'space-between',
          textAlign : {xs : 'center'}
        }}
      >
        {/* First */}
        <Box sx={{
          width: { md: '20%', xs: '100%' },
          mb: { xs: 3}
        }}
        >
          <Image src={'/logo.png'} width={164} height={24} alt="" />
          <Typography fontSize={'14px'} mt={1} color={'#4F4F4F'}>Your next goto companion <br/>for travel</Typography>


        </Box>
        {/* Sec */}
        <Box sx={{
          width: { md: '20%', xs: '100%' },
          mb: { xs: 3 }
        }}
        >
          <Typography fontSize={'16px'} fontWeight={500} mb={2}>Company</Typography>

          <Typography fontSize={'14px'} color={'#4F4F4F'}>About</Typography>
          <Typography fontSize={'14px'} color={'#4F4F4F'}>Jobs</Typography>
          <Typography fontSize={'14px'} color={'#4F4F4F'}>Newsroom</Typography>
          <Typography fontSize={'14px'} color={'#4F4F4F'}>Adversiting</Typography>
          <Typography fontSize={'14px'} color={'#4F4F4F'}>Contact us</Typography>


        </Box>
        {/* Third */}
        <Box sx={{
          width: { md: '20%', xs: '100%' },
          mb: { xs: 3 }
        }}
        >
          <Typography fontSize={'16px'} fontWeight={500} mb={2}>Explore</Typography>

          <Typography fontSize={'14px'} color={'#4F4F4F'}>Australia</Typography>
          <Typography fontSize={'14px'} color={'#4F4F4F'}>New Zealand</Typography>
          <Typography fontSize={'14px'} color={'#4F4F4F'}>United States America (USA)</Typography>
          <Typography fontSize={'14px'} color={'#4F4F4F'}>Greece</Typography>
          <Typography fontSize={'14px'} color={'#4F4F4F'}>Maldives</Typography>
          <Typography fontSize={'14px'} color={'#4F4F4F'}>Singapore</Typography>



        </Box>
        {/* Fourth */}
        <Box sx={{
          width: { md: '20%', xs: '100%' },
          mb: { xs: 3 }
        }}
        >
          <Typography fontSize={'16px'} fontWeight={500} mb={2}>Terms ans Policies</Typography>

          <Typography fontSize={'14px'} color={'#4F4F4F'}>Privacy Policy</Typography>
          <Typography fontSize={'14px'} color={'#4F4F4F'}>Terms of use</Typography>
          <Typography fontSize={'14px'} color={'#4F4F4F'}>Acessibility</Typography>
          <Typography fontSize={'14px'} color={'#4F4F4F'}>Reward system policy</Typography>



        </Box>
        {/* FIfth */}
        <Box sx={{
          width: { md: '20%', xs: '100%' },
          mb: { xs: 3 }
        }}
        >
          <Typography fontSize={'16px'} fontWeight={500} mb={2}>Help</Typography>

          <Typography fontSize={'14px'} color={'#4F4F4F'}>Support</Typography>
          <Typography fontSize={'14px'} color={'#4F4F4F'}>Cancel your bookings</Typography>
          <Typography fontSize={'14px'} color={'#4F4F4F'}>Use Coupon</Typography>
          <Typography fontSize={'14px'} color={'#4F4F4F'}>Refund Policies</Typography>
          <Typography fontSize={'14px'} color={'#4F4F4F'}>International Travel Documents</Typography>



        </Box>



      </Box>


    </Box>
  )
}

export default Footer