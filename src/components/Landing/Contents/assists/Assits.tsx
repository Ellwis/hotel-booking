import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle'
import { Box, Typography } from '@mui/material';
import Image from 'next/image';


const Slide: FC<{ src: string }> = ({ src }) => {
  return (

    <SwiperSlide>
      <Box sx={{
        textAlign: 'center',

      }}>
        <Image src={src} width={100} height={100} alt='digikala' />
      </Box>
    </SwiperSlide>

  )




}
const AssistComponent: FC = () => {
  return (
    <Box
      sx={{
        width: '90%',
        mx: 'auto',
        height: '100px'
      }}>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={3}

        pagination={{ clickable: true }}

      >
        <SwiperSlide>
          <Box sx={{
            textAlign: 'center',

          }}>
            <Image src={'/digikala.png'} width={100} height={100} alt='digikala' />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box sx={{
          textAlign: 'center',
          mt : 3

        }}>
          <Image src='/shab.png' width={100} height={50} alt='digikala' />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{
          textAlign: 'center',

        }}>
          <Image src='/bh.png' width={100} height={100} alt='digikala' />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{
          textAlign: 'center',

        }}>
          <Image src='/digikala.png' width={100} height={100} alt='digikala' />
        </Box>
      </SwiperSlide>
      </Swiper>
    </Box>
  )

}

export default AssistComponent