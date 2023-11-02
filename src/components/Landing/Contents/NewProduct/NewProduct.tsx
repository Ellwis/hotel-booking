import { FC } from 'react'
import { Box, Typography } from '@mui/material';

const NewProduct: FC<{ title?: string, desc?: string, chat?: string, channel?: string, date?: string, img?: string }> = ({ title, desc, chat, channel, date, img }) => {
  return (
    <Box sx={{
      width: '100%',
      mx: 'auto',
      my: 5,
    }}>
      <Box sx={{
        textAlign: 'center',

      }}>
        <Box sx={{
          background: 'linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(110, 203, 99, 1) 76%)',
          borderRadius: '20px',
          direction: 'rtl',
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
          <Box
            sx={{
              width: '100%',
              borderTop: '1px solid black',
              display: 'flex',
              justifyContent: 'flex-start',
              p: 1,
              pr: 2

            }}>
            <Typography>چت آنلاین با کاربران</Typography>
          </Box>
          <Box
            sx={{
              width: '100%',
              borderTop: '1px solid black',
              borderBottom: '1px solid black',
              display: 'flex',
              justifyContent: 'flex-start',
              p: 1,
              mb: 1,
              pr: 2




            }}>
            <Typography>ایجاد کانال و گروه های متفاوت</Typography>
          </Box>

          <Typography sx={{

            width: '90%',
            mx: 'auto',
            bgcolor: "#515E64",
            color: 'white',
            py: 1,
            borderRadius: '10px',
            fontSize: '16px',
            mb: 1,

          }}>اطلاعات بیشتر </Typography>
          <Box
            sx={{
              width: '100%',
              borderTop: '1px solid black',
              display: 'flex',
              justifyContent: 'flex-start',
              px: 1,
              pr: 2

            }}>
            <Typography fontSize={'10px'}>تاریخ تولید : 1402/06/09</Typography>
          </Box>

        </Box >


      </Box>



    </Box>
  )

}

export default NewProduct