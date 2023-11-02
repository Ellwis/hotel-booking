import { FC } from 'react'
import Header from '../Header/Header'
import SwipperComponent from './Swipper'
import { Box, Button, FilledInput, Input, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import WebServices from './Contents/WebServices/WebServices'
import PhpServices from './Contents/PhpServices/PhpServices'
import { content } from './Contents/info'
import NewProduct from './Contents/NewProduct/NewProduct'
import SliderProducts from './Contents/NewProduct/SliderPoducts'
import AssistComponent from './Contents/assists/Assits'
import Footer from '../Footer/Footer'
import { MobileDetector } from '@/hooks/MobileDetector'
import Image from 'next/image'


const Landing: FC = () => {
  return (
    <>
      <Header />

      <Box
        sx={{
          width: '90%',
          mx: 'auto',
          textAlign: 'center',


        }}>
        {/*  CONTENT 1 */}
        <Box
          sx={{
            width: '100%',
            height: '500px',
            textAlign: 'center',
            backgroundImage: 'url(/bg.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative',
            borderRadius: '10px',
            pt: '200px',
            mb: { xs: 30, md: 10 },

          }}
        >
          <Typography variant='h3'
            sx={{
              color: 'rgba(255, 255, 255, 1)',
              fontSize: '32px',
              fontWeight: '700',
              mb: 3
            }}
          >Enjoy Your Dream Vacation</Typography>
          <Typography color={'rgba(255, 255, 255, 1)'}>Plan and book our perfect trip with expert advice, travel tips, destination information and inspiration from us</Typography>
          <Box
            sx={{
              bgcolor: 'white',
              width: '80%',
              display: { md: 'flex', xs: 'block' },
              justifyContent: 'space-evenly',
              mx: 'auto',
              height: { md: '64px', xs: 'auto' },
              borderRadius: '8px',
              mt: { md: 22, xs: 12 },
              boxShadow: '3',
              p: '10px'


            }}
          >
            <TextField
              InputProps={{
                sx: {
                  bgcolor: 'rgba(242, 242, 242, 1)'
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={'/loc.png'} height={20} width={20} alt='' />
                  </InputAdornment>
                )
              }}
              size='small'
              sx={{
                "& input::placeholder": {
                  fontSize: "12px",
                  color: 'rgba(79, 79, 79, 1)'
                },
                width: { md: '20%', xs: '100%' },
                mb: { xs: 1 }
              }}
              type='text'
              placeholder='Where are you going ?'
            />            <TextField
              InputProps={{
                sx: {
                  bgcolor: 'rgba(242, 242, 242, 1)'
                },

                startAdornment: (
                  <InputAdornment position="start">
                    <Image src={'/date.png'} height={20} width={20} alt='' />
                  </InputAdornment>
                )
              }}

              size='small'
              sx={{ width: { md: '15%', xs: '100%' }, mb: { xs: 1 } }}
              placeholder='check in'
              type='text' />
            <TextField
              InputProps={{
                sx: {
                  bgcolor: 'rgba(242, 242, 242, 1)'
                },


                startAdornment: (
                  <InputAdornment position="start">
                    <Image src={'/date.png'} height={20} width={20} alt='' />
                  </InputAdornment>
                )
              }}

              size='small'
              sx={{ width: { md: '15%', xs: '100%' }, mb: { xs: 1 } }}
              placeholder='check out'
              type='text' />
            <TextField
              InputProps={{
                sx: {
                  bgcolor: 'rgba(242, 242, 242, 1)'
                },

                startAdornment: (
                  <InputAdornment position="start">
                    <Image src={'/guest.png'} height={20} width={20} alt='' />
                  </InputAdornment>
                )
              }}

              size='small'
              placeholder='Guests'
              sx={{ width: { md: '20%', xs: '100%' }, mb: { xs: 1 } }}
              type='text' />
            <Button size='small' variant='contained' sx={{ width: { md: '20%', xs: '100%' }, height: '40px' , bgcolor :'#2F80ED'}}>Search</Button>
          </Box>
        </Box>

        {/*  BODY */}

        <Box
          sx={{
            height: '72px',
            borderRadius: '8px',
            bgcolor: 'rgba(252, 239, 202, 1)',
            p: 3,
            mb: 3,
            display: 'flex',
            alignItems: 'center'

          }}
        >
          <Image src={'/danger.png'} height={25} width={25} alt='' />
          <Typography ml={1}>Check the latest COVID-19 restrictions before you travel. Learn more
          </Typography>

        </Box>

        <Box
          sx={{
            textAlign: 'left',
            mb: 3

          }}
        >
          <Typography variant='h4' fontSize={'28px'} mb={3}>Enjoy your dream vacation</Typography>
          <Typography>Plan and book our perfect trip with expert advice, travel tips, destination information and <br /> inspiration from us</Typography>
        </Box>


        {/*  COUNTRIES SECTION*/}

        <Box
          sx={{
            width: '100%',
            display: { md: 'flex', xs: 'block' },
            py: 2,
            justifyContent: 'space-around',
            textAlign: { md: "left", xs: 'center' },
            overflow: 'hidden',
            borderRadius: '8px',


          }}
        >
          <Box
            sx={{
              width: { md: '22%', xs: '100%' },
              mb: { xs: 2 },


            }}
          >
            <Box sx={{
              width: '100%',
              height: '220px',
              backgroundImage: 'url(/aus.png)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderRadius: '8px'
            }}>

            </Box>

            {/* <Image layout="responsive"
              src={'/aus.png'} height={220} width={295} alt='' style={{ borderRadius: '8px', marginBottom: 1, boxShadow: '0px 5px 10px gray' }} /> */}
            <Typography fontSize={'20px'} fontWeight={600} my={1}>Australia</Typography>
            <Typography fontSize={'16px'} fontWeight={400}>2246 properties</Typography>

          </Box>
          <Box
            sx={{
              width: { md: '22%', xs: '100%' },
              mb: { xs: 2 }


            }}
          >
            <Box sx={{
              width: '100%',
              height: '220px',
              backgroundImage: 'url(/jpn.png)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderRadius: '8px',
              boxShadow: 3

            }}>

            </Box>

            {/* <Image layout="responsive"
              src={'/jpn.png'} height={220} width={295} alt='' style={{ borderRadius: '8px', marginBottom: 1, boxShadow: '0px 5px 10px gray' }} /> */}
            <Typography fontSize={'20px'} fontWeight={600} my={1}>Japan</Typography>
            <Typography fontSize={'16px'} fontWeight={400}>1278 properties</Typography>

          </Box>
          <Box
            sx={{
              width: { md: '22%', xs: '100%' },
              mb: { xs: 2 }


            }}
          >
            <Box sx={{
              width: '100%',
              height: '220px',
              backgroundImage: 'url(/nz.png)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderRadius: '8px',
              boxShadow: 3

            }}>

            </Box>

            {/* <Image layout="responsive"
              src={'/nz.png'} height={220} width={295} alt='' style={{ borderRadius: '8px', marginBottom: 1, boxShadow: '0px 5px 10px gray' }} /> */}
            <Typography fontSize={'20px'} fontWeight={600} my={1}>New Zealand</Typography>
            <Typography fontSize={'16px'} fontWeight={400}>480 properties</Typography>

          </Box>
          <Box
            sx={{
              width: { md: '22%', xs: '100%' },
              mb: { xs: 2 }


            }}
          >
            <Box sx={{
              width: '100%',
              height: '220px',
              backgroundImage: 'url(/grc.png)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderRadius: '8px',
              boxShadow: 3
            }}>

            </Box>

            {/* <Image
              layout="responsive"
              objectFit='cover'
              src={'/grc.png'}
              height={220}
              width={295} alt=''
              style={{ borderRadius: '8px', marginBottom: 1, boxShadow: '0px 5px 10px gray' }} /> */}
            <Typography fontSize={'20px'} fontWeight={600} my={1}>Greece</Typography>
            <Typography fontSize={'16px'} fontWeight={400}>320 properties</Typography>

          </Box>

        </Box>

        {/* INSPIRATION SECTION  */}

        <Typography variant='h3' sx={{
          fontSize: '28px',
          mt: 5,
          mb: 3,
          textAlign: 'left'
        }}
        >Get inspiration for your next trip</Typography>
        <Box sx={{ width: '100%', display: { md: 'flex', xs: 'block' }, alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ width: { md: '30%', xs: '100%' }, mb: { xs: 3 } }}>
            <Box sx={{
              backgroundImage: 'url(/sydney.png)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              width: '100%',
              height: '230px',
              borderRadius: '8px',
              textAlign: 'left',
              color: 'white',
              p: '100px 30px 30px 30px',
              boxShadow: 2


            }}>
              <Typography mb={1} fontSize={'20px'} fontWeight={600}>Sydeny’s 10 most fashionable 5 star hotels</Typography>
              <Typography>Browse the fastest growing tourism sector in the heart of Australia tourism capital ....</Typography>

            </Box>
          </Box>
          <Box sx={{ width: { md: '30%', xs: '100%' }, mb: { xs: 3 } }}>
            <Box sx={{
              backgroundImage: 'url(/vegan.png)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',

              width: '100%',
              height: '230px',
              borderRadius: '8px',
              textAlign: 'left',
              color: 'white',
              p: '100px 30px 30px 30px',
              boxShadow: 2


            }}>
              <Typography mb={1} fontSize={'20px'} fontWeight={600}>Sydeny’s 10 most fashionable 5 star hotels</Typography>
              <Typography>Browse the fastest growing tourism sector in the heart of Australia tourism capital ....</Typography>



            </Box>
          </Box>
          <Box sx={{ width: { md: '30%', xs: '100%' }, mb: { xs: 3 } }}>
            <Box sx={{
              backgroundImage: 'url(/pandemic.png)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              width: '100%',
              height: '230px',
              borderRadius: '8px',
              textAlign: 'left',
              color: 'white',
              p: '100px 30px 30px 30px',
              boxShadow: 2



            }}>
              <Typography mb={1} fontSize={'20px'} fontWeight={600}>Sydeny’s 10 most fashionable 5 star hotels</Typography>
              <Typography>Browse the fastest growing tourism sector in the heart of Australia tourism capital ....</Typography>



            </Box>
          </Box>
        </Box>

        {/* HOTELS */}

        <Typography variant='h4' fontSize={'28px'} mb={3} textAlign={'left'}>Popular Hotels</Typography>


        <Box
          sx={{
            width: '100%',
            display: { md: 'flex', xs: 'block' },
            py: 2,
            justifyContent: 'space-around',
            textAlign: { md: "left", xs: 'center' },
            // boxShadow: 3,
            overflow: 'hidden',
            borderRadius: '8px',


          }}
        >
          <Box
            sx={{
              width: { md: '22%', xs: '100%' },
              mb: { xs: 2 },


            }}
          >
            <Box sx={{
              width: '100%',
              height: '220px',
              backgroundImage: 'url(/hotel1.png)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderRadius: '8px'
            }}>

            </Box>

            {/* <Image layout="responsive"
              src={'/aus.png'} height={220} width={295} alt='' style={{ borderRadius: '8px', marginBottom: 1, boxShadow: '0px 5px 10px gray' }} /> */}
            <Typography fontSize={'20px'} fontWeight={600} my={1}>Lakeside Motel Warefront</Typography>
            <Typography fontSize={'16px'} fontWeight={400}>2246 properties</Typography>

          </Box>
          <Box
            sx={{
              width: { md: '22%', xs: '100%' },
              mb: { xs: 2 }


            }}
          >
            <Box sx={{
              width: '100%',
              height: '220px',
              backgroundImage: 'url(/hotel2.png)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderRadius: '8px',
              boxShadow: 3

            }}>

            </Box>

            {/* <Image layout="responsive"
              src={'/jpn.png'} height={220} width={295} alt='' style={{ borderRadius: '8px', marginBottom: 1, boxShadow: '0px 5px 10px gray' }} /> */}
            <Typography fontSize={'20px'} fontWeight={600} my={1}>Recce Graham resort</Typography>
            <Typography fontSize={'16px'} fontWeight={400}>1278 properties</Typography>

          </Box>
          <Box
            sx={{
              width: { md: '22%', xs: '100%' },
              mb: { xs: 2 }


            }}
          >
            <Box sx={{
              width: '100%',
              height: '220px',
              backgroundImage: 'url(/hotel3.png)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderRadius: '8px',
              boxShadow: 3

            }}>

            </Box>

            {/* <Image layout="responsive"
              src={'/nz.png'} height={220} width={295} alt='' style={{ borderRadius: '8px', marginBottom: 1, boxShadow: '0px 5px 10px gray' }} /> */}
            <Typography fontSize={'20px'} fontWeight={600} my={1}>Fireside Dinners</Typography>
            <Typography fontSize={'16px'} fontWeight={400}>480 properties</Typography>

          </Box>
          <Box
            sx={{
              width: { md: '22%', xs: '100%' },
              mb: { xs: 2 }


            }}
          >
            <Box sx={{
              width: '100%',
              height: '220px',
              backgroundImage: 'url(/hotel4.png)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderRadius: '8px',
              boxShadow: 3
            }}>

            </Box>

            {/* <Image
              layout="responsive"
              objectFit='cover'
              src={'/grc.png'}
              height={220}
              width={295} alt=''
              style={{ borderRadius: '8px', marginBottom: 1, boxShadow: '0px 5px 10px gray' }} /> */}
            <Typography fontSize={'20px'} fontWeight={600} my={1}>Oculous Inn Stay</Typography>
            <Typography fontSize={'16px'} fontWeight={400}>320 properties</Typography>

          </Box>

        </Box>

        {/* BG 2 */}

        <Box
          sx={{
            width: '100%',
            height: {md : '280px' , xs :'auto'},
            backgroundImage: 'url(/bg2.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '8px',
            boxShadow: 3,
            position: 'relative',
            p:10,
            textAlign :{md : 'left' , xs : 'center'},
            color :'white'

          }}>
            <Typography fontWeight={600} fontSize={'28px'} mb={3}>Download the mobile application for bonus <br/> coupons and travel codes</Typography>
            <Button variant='contained' sx={{ py : 1.5, bgcolor :'#2F80ED'}}>Download mobile app</Button>
        </Box>

        <Box
        sx={{
          width : '100%',
          height : {md : "70px" ,xs : 'auto'},
          textAlign : 'center',
          my: 5

        }}
        >
          <Typography fontSize={'28px'} fontWeight={600} mb={3}>Explore the world with My Dream place</Typography>
          <Typography color={'#2F80ED'}>Discover new places and experiences</Typography>

        </Box>






      </Box>
      <Footer />

    </>
  )

}

export default Landing