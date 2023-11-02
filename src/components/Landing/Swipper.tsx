import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle'
import { Box } from '@mui/material';

const SwipperComponent: FC = () => {

  return (
    <Box sx={{
      width : '94%', 
      mx  : 'auto',
      my : 5, 
    }}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={100}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
       
      >
        <SwiperSlide>
          <img src={'/slider.png'} alt='image' width={'100%'}   />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'/slider.png'} alt='image' width={'100%'}  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'/slider.png'} alt='image' width={'100%'}  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'/slider.png'} alt='image' width={'100%'}  />
        </SwiperSlide>
        .
      </Swiper>
    </Box>
  )

}

export default SwipperComponent