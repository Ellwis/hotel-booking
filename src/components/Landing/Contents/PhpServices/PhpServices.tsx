import { MobileDetector } from "@/hooks/MobileDetector";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";



const PhpServices: FC<{ title?: string, desc?: string, img?: string, btnColor?: string }> = ({ title, desc, img, btnColor }) => {
  const isWindows = MobileDetector()

  return (
    <Box sx={{
      width: isWindows ? '30%' :'90%',
      textAlign: 'center',
      mx: 'auto',
      mb: isWindows ? 0 : 3

    }}>
      <Box sx={{
        bgcolor: 'white',
        borderRadius: '20px',
        pb: 3


      }}>
        <img src={`${img}`} alt="img" width={'100%'} />


        <Typography
          fontSize='20px'
          fontWeight={'900'}
          mb={2}>{title}</Typography>
        <Typography
          fontSize='16px'
          mb={2}>{desc}</Typography>

        <Typography sx={{
          width: '90%',
          mx: 'auto',
          bgcolor: `${btnColor}`,
          color: 'white',
          py: 1,
          borderRadius: '10px',
          fontSize: '16px'

        }}>اطلاعات بیشتر </Typography>
      </Box >
    </Box>

  );
}
export default PhpServices