import { MobileDetector } from "@/hooks/MobileDetector";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";



const WebServices: FC<{ title?: string, desc?: string, img?: string, btnColor?: string }> = ({ title, desc, img, btnColor }) => {
  const isWindows = MobileDetector()

  return (
    <Box sx={{
      width: isWindows ? '30%' : '100%',
      textAlign: 'center',
      mb: 4 ,

    }}>
      <Box sx={{
        my: 4,

      }}>

        <Image src={`${img}`}  alt="img" width={80} height={80}/>
      </Box>
      <Box sx={{
        bgcolor :'white'
      }}>

        <Typography
          fontSize='16px'
          mb={2}>{title}</Typography>
        <Typography
          fontSize='16px'
          mb={2}>{desc}</Typography>

      </Box>
      <Typography sx={{
        width: '100%',
        bgcolor: `${btnColor}`,
        color: 'white',
        py: 1,
        borderRadius: '20px',
        fontSize: '16px'

      }}>اطلاعات بیشتر </Typography>

    </Box >
  );
}
export default WebServices