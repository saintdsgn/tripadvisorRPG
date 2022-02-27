import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CastleItem from "../Rpg/CastleItem";
import "../Rpg/Rpg.css";
const SwiperVertical = ({ castles }) => {
  return (
    <Swiper
      direction={"vertical"}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      // navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      style={{ width: "100%", height: "100%" }}
    >
      {castles.map((item) => {
        return (
          <SwiperSlide
            key={item.id}
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // justifyContent: "flex-start",
              // border: "1px solid red",
              // marginTop: "-200px",
            }}
          >
            <CastleItem item={item} mobile="mobile" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperVertical;
