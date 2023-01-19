import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

interface Land {
  slides: FC[],
}

const Land: FC<Land> = (props) => {
  return (
    <div
      id="template-mo-zay-hero-carousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <Swiper
          slidesPerView={1}
          cssMode={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          navigation={{
            nextEl: ".next-fact",
            prevEl: ".prev-fact",
          }}
        >
          {props.slides?.map((slide: FC, index: number) => (
            <SwiperSlide key={index}>{slide}</SwiperSlide>
          ))}
          {/* <SwiperSlide>
            <div className="carousel-item active d-flex align-items-center flex-column justify-content-center">
              <div className="container d-flex flex-column align-items-center mb-20">
                <div className="fs-4">Your Weight?</div>
                <input type='text' className="w-80 mt-2 p-2 rounded-pill shadow-lg" placeholder="Your Weight  Kg" />
                <div className="fs-4 mt-5">Goal of Weight</div>
                <input type='text' className="w-80 mt-2 p-2 rounded-pill shadow-lg" placeholder="Goal of Weight  Kg" />
              </div>
              <div className="d-flex">
                <button className="btn btn-secondary prev-fact pl-3 pr-3 pt-1 pb-1 w-40 fs-3 rounded-pill mb-[20px]">Prev</button>
                <button className="btn btn-secondary next-fact pl-3 pr-3 pt-1 pb-1 w-40 fs-3 rounded-pill mb-[20px] ml-20">Next</button>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Land;
