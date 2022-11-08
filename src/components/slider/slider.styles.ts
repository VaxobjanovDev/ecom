import styled from "styled-components";

export const SliderBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: #F3F5F8;
  padding: 1rem;

  .swiper {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 5px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`