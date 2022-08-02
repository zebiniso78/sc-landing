import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './carouselStyle.css';
import styled from 'styled-components';

// import required modules
import { Pagination, Navigation, EffectFade, Autoplay, Keyboard } from 'swiper';
function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        className="mySwiper"
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay, Keyboard]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          {/* <img src="https://picsum.photos/1000" alt="" />
           */}
          Slider 1
        </SwiperSlide>
        <MySwiperSlide>
          {/* <img src="https://picsum.photos/1200" alt="" /> */}
          Slider 3
        </MySwiperSlide>
        <SwiperSlide>Slider 5</SwiperSlide>
      </Swiper>
    </>
  );
}

export const MySwiperSlide = styled.SwiperSlide`
  border: 1px solid red !important;
`;

export default Carousel;
