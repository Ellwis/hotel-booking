import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle'
import 'swiper/css/autoplay'
import { Box } from '@mui/material';
import NewProduct from './NewProduct';
import { content } from '../info';
import { MobileDetector } from '@/hooks/MobileDetector';

const SliderProducts: FC = () => {
  const isWindows = MobileDetector()


  return (
    <Box sx={{
      width: '90%',
      mx: 'auto',
      my: 5,
    }}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y ]}
        spaceBetween={30}
        slidesPerView={isWindows ? 3 : 1}
        navigation
        autoplay
        pagination={{ clickable: true }}

      >
        <SwiperSlide>
          <NewProduct title={content[2].title} desc={content[2].desc} img='/php.png'  />
        </SwiperSlide>
        <SwiperSlide>
          <NewProduct title={content[2].title} desc={content[2].desc} img='/php.png'  />
        </SwiperSlide>
        <SwiperSlide>
          <NewProduct title={content[2].title} desc={content[2].desc} img='/php.png'  />
        </SwiperSlide>
        <SwiperSlide>
          <NewProduct title={content[2].title} desc={content[2].desc} img='/php.png'  />
        </SwiperSlide>
        <SwiperSlide>
          <NewProduct title={content[2].title} desc={content[2].desc} img='/php.png'  />
        </SwiperSlide>
      </Swiper>
    </Box>
  )

}

export default SliderProducts