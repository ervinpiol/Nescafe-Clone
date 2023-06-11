import React from "react";
import NavLocation from "../../layouts/NavLocation";
import DiscoverImg1Desktop from "../../assets/AllCoffees/AllCoffeeTop/discover-img-1.webp";
import DiscoverImg1Mobile from "../../assets/AllCoffees/AllCoffeeTop/discover-img-1-mobile.webp";
import DiscoverImg2 from "../../assets/AllCoffees/AllCoffeeTop/discover-img-2.webp";
import DiscoverImg3 from "../../assets/AllCoffees/AllCoffeeTop/discover-img-3.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
SwiperCore.use([Navigation, Pagination, Scrollbar]);
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const AllCoffeesBanner = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <div className="">
      <NavLocation navLocation="All Coffees" />
      <div className="relative h-full w-full">
        <div>
          <Swiper
            id="all-coffees-slider"
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            allowTouchMove={isDesktop ? false : true}
          >
            <SwiperSlide>
              <div className="relative">
                <img
                  src={isDesktop ? DiscoverImg1Desktop : DiscoverImg1Mobile}
                  alt="DiscoverImg1"
                  className="h-[250px] w-full md:h-[350px] lg:h-[450px] xl:h-[580px]"
                />
                <h2 className="absolute left-1/2 top-14 z-20 flex w-full -translate-x-1/2 justify-center whitespace-nowrap text-[26px] text-white md:top-32 md:text-[34px] lg:top-40 xl:top-52">
                  All Nescafe Coffee
                </h2>
                <div className="absolute top-0 z-[1] h-screen w-screen bg-black bg-opacity-50" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex">
                <img
                  src={DiscoverImg2}
                  alt="DiscoverImg2"
                  className="h-[250px] w-1/2 md:h-[350px] lg:h-auto lg:w-2/3"
                />
                <div className="flex-1 bg-LightRed pl-5 pt-8 text-white md:pt-28 lg:pl-16 lg:pt-24 xl:pt-36">
                  <h3 className="md:text-2xl lg:text-4xl">
                    NESCAFE 3IN1 ORIGINAL
                  </h3>
                  <Link to="/all-coffees/nescafé-original">
                    <button className="flex items-center gap-3.5 pt-4 font-GothamRoundedMedium text-xs font-bold lg:pt-6 lg:text-sm">
                      <FontAwesomeIcon icon={faArrowRightLong} />
                      <span to="/nescafe-classic">Discover now</span>
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex">
                <img
                  src={DiscoverImg3}
                  alt="DiscoverImg3"
                  className="h-[250px] w-1/2 md:h-[350px] lg:h-auto lg:w-2/3"
                />
                <div className="flex-1 bg-LightRed pl-5 pt-8 text-white md:pt-28 lg:pl-16 lg:pt-24 xl:pt-36">
                  <h3 className="xxs:text-base md:text-2xl lg:text-4xl">
                    NESCAFE CLASSIC
                  </h3>
                  <Link to="/all-coffees/nescafé-classic">
                    <button className="flex items-center gap-3.5 pt-4 font-GothamRoundedMedium text-xs font-bold lg:pt-6 lg:text-sm">
                      <FontAwesomeIcon icon={faArrowRightLong} />
                      <span to="/nescafe-classic">Discover now</span>
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AllCoffeesBanner;
