import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { MobileDetector } from "@/hooks/MobileDetector";



const AdminPanel: FC = () => {
  const isWindows = MobileDetector()
  return (
    <>
      {/* HEADER */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        px: 5,
        width: '100%',
        alignItems: 'center',
        bgcolor: '#6ECB63' ,
        height: '86px',
        boxShadow: 3


      }}
      >
        <Box

          sx={{
            width: '65%',
            textAlign: 'right',
            cursor: 'pointer',
          }} >
          <Typography fontSize={'20px'} color={'white'}>پنل ادمین نهال آی تی</Typography>

        </Box>
        <Box
          sx={{
            width: '25%',
          }}
        >
          <Link href='/login'>
            <Image alt="person" src={'/boy.png'} height={50} width={50} style={{ borderRadius: '50%' }} />
          </Link>

        </Box>
      </Box>
      {/* BODY */}
      <Box sx={{ width: '90%', mx: 'auto', mt: 10, display: isWindows ? 'flex' : 'block', justifyContent: 'space-between', flexDirection: 'row-reverse' }}>
        {/* RIGHT */}
        <Box
          sx={{
            width: !isWindows ?'100%' :'30%',
            bgcolor: '#6ECB63',
            boxShadow: 3,
            borderRadius: '30px',
            direction: 'rtl',
            p: 5,
            color: 'white',
            mb:!isWindows? 3 : 0


          }}
        >
          <Typography fontSize={'20px'} borderBottom={'1px solid black'} py={2}>داشبورد</Typography>
          <Box display={'flex'} justifyContent={'space-between'} borderBottom={'1px solid black'} alignItems={'center'}>
            <Box width={'40%'}>
              <Typography fontSize={'20px'} py={2}>منو ها</Typography>
            </Box>
            <Box>
              <Typography bgcolor={'#DC3545'} borderRadius={'50%'} py={0.5} px={1}>10</Typography>
            </Box>
          </Box>
          <Typography fontSize={'20px'} borderBottom={'1px solid black'} py={2}>محصولات</Typography>
          <Typography fontSize={'20px'} borderBottom={'1px solid black'} py={2}>دسته بندی محصولات</Typography>
          <Button href="/" fullWidth sx={{ width: '100%', bgcolor: '#FFC107', color: 'white', borderRadius: '10px', py: 1.5, mt: 15 }}>خروج</Button>



        </Box>
        {/* LEFT */}
        <Box
          sx={{
            direction: 'rtl',
            width: !isWindows ? '100%':'65%',
            bgcolor: '#6ECB63',
            boxShadow: 3,
            borderRadius: '30px',
            height: '300px',
            p: 5,
            color: 'white'




          }}
        >
          <Typography fontSize={'20px'} borderBottom={'1px solid black'} py={2}>داشبورد</Typography>
          <TableContainer sx={{ bgcolor: 'white', mt: 2 }}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">ردیف</TableCell>
                  <TableCell align="right">نام کاربری</TableCell>
                  <TableCell align="right">ایمیل</TableCell>
                  <TableCell align="right">وضعیت</TableCell>
                  <TableCell align="right">مقام</TableCell>
                  <TableCell align="right">پسورد</TableCell>
                  <TableCell align="right"> تنظیمات</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>

                  <TableCell align="right"> 1</TableCell>
                  <TableCell align="right"> mohammad</TableCell>
                  <TableCell align="right">amiri@gmail.com </TableCell>

                  <TableCell align="right"><Typography bgcolor={'green'} color={'white'} textAlign={'center'}>فعال</Typography> </TableCell>

                  <TableCell align="right"> admin</TableCell>

                  <TableCell align="right"> asdf****</TableCell>
                  <TableCell align="right"><Image src={'/setting.png'} width={60} height={20} alt="img"></Image> </TableCell>
                </TableRow>
                <TableRow>

                  <TableCell align="right"> 2</TableCell>
                  <TableCell align="right"> ofek</TableCell>
                  <TableCell align="right">ofek@gmail.com </TableCell>

                  <TableCell align="right"><Typography bgcolor={'red'} color={'white'} textAlign={'center'}>غیر فعال</Typography> </TableCell>

                  <TableCell align="right"> writer</TableCell>

                  <TableCell align="right"> sfdgd****</TableCell>
                  <TableCell align="right"><Image src={'/setting.png'} width={60} height={20} alt="img"></Image> </TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>


        </Box>
      </Box>
      
    </>
  )

}

export default AdminPanel