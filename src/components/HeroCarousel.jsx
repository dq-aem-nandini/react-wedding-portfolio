import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  EffectFade,
  Pagination,
} from "swiper/modules";
import { weddings } from "../data/weddings";
import { Link } from "react-router-dom";

const HeroCarousel = () => {
  return (
    <section className="relative bg-[#f2f0f0] pt-20 pb-16">

      {/* Decorative florals (desktop & tablet only) */}
      <img
  src="/images/floral-left.png"
  className="absolute left-0 bottom-0 w-[26rem] pointer-events-none z-10 hidden md:block"
  alt=""
/>

<img
  src="/images/floral-right.png"
  alt=""
  className="
    absolute right-0 top-0
    w-[14rem] sm:w-[18rem] md:w-[26rem]
    pointer-events-none
    z-0
  "
/>
      <div className="relative">
      <Swiper
  modules={[Navigation, Autoplay, EffectFade, Pagination]}
  slidesPerView={1}
  loop
  effect="fade"
  speed={1200}
  autoplay={{ delay: 6000 }}
  navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
  pagination={{ clickable: true }}
  className="w-full z-20 lg:[&_.swiper-pagination]:hidden"
>


          {weddings.map((wedding) => (
            <SwiperSlide key={wedding.id}>
              <div
                className="
                relative mx-auto mt-20
                w-[90%]
                sm:w-[80%]
                md:w-[70%]
                lg:w-[56%]
                max-w-[800px]
              "
              >
                {/* IMAGE + OVERLAYS */}
                <div className="relative">

                  {/* IMAGE BOX (ONLY CLIPPED AREA) */}
                  <div className="relative aspect-[16/10] overflow-hidden">

                    <img
                      src={wedding.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/25" />

                    {/* TYPE */}
                    {wedding.type && (
                      <div className="absolute top-6 sm:top-10 w-full text-center">
                        <p
                          style={{
                            fontFamily: "Lekton, sans-serif",
                            fontSize: "30px",
                            fontWeight: 400,
                            letterSpacing: "0.35em",
                            textTransform: "uppercase",
                            color: "#d6b16a",
                            margin: 0,
                          }}
                        >
                          {wedding.type}
                        </p>
                      </div>
                    )}

                    {/* NAMES */}
                    <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-16 lg:px-24">
                      <h1
                        className="
                        text-[64px]
                        sm:text-[80px]
                        md:text-[100px]
                        lg:text-[130px]
                      "
                        style={{
                          fontFamily: "Italiana, sans-serif",
                          lineHeight: "1",
                          color: "#ffffff",
                          textAlign: "center",
                          pointerEvents: "none",
                        }}
                      >
                        {wedding.nameLine1}
                        <br />
                        {wedding.nameLine2}
                      </h1>
                    </div>

                    {/* VIEW BUTTON */}
                    <div
                      className="
                      absolute left-1/2 -translate-x-1/2 z-30
                      bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12
                    "
                    >
                      <Link to={wedding.link}>
                        <button className="bg-white border border-[#d6b16a] px-8 sm:px-10 py-3 text-[12px] tracking-[0.35em] uppercase text-[#caa24d] cursor-pointer">
                          V I E W ▶
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* PRE / NXT — DESKTOP ONLY */}
                  <div className="absolute -right-10 bottom-8 hidden lg:flex flex-col items-center gap-1 z-40">
                    <button className="custom-prev bg-white border border-[#d6b16a] px-3 py-1 text-[10px] tracking-[0.3em] text-[#d6b16a] cursor-pointer">
                      P R E ▲
                    </button>

                    <button className="custom-next bg-white border border-[#d6b16a] px-3 py-1 text-[10px] tracking-[0.3em] text-[#d6b16a] cursor-pointer">
                      N X T ▼
                    </button>
                  </div>
                </div>

                {/* DOTS — MOBILE & TABLET */}

                {/* BOTTOM TEXT */}
                <div className="mt-6 flex justify-center sm:justify-end">
                  <p
                    className="text-center sm:text-right max-w-[360px]"
                    style={{
                      fontFamily: "Lekton, sans-serif",
                      fontSize: "18px",
                      fontWeight: 400,
                      color: "#d2ab67",
                    }}
                  >
                    It sounds like a song of ages, like a prophecy of time
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroCarousel;
