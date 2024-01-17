import { useState, useEffect } from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBack from "./icons-react/ArrowBack";
import ArrowForward from "./icons-react/ArrowForward";
import Close from "./icons-react/Close";

export default function ImagesModal({ modal, closeModal, images }) {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (modal.isOpen) swiper?.slideTo(modal.i);

    const handlePressedKey = (e) => {
      if (e.key === "ArrowLeft") {
        if (modal.isOpen) handlePrev(e);
      } else if (e.key === "ArrowRight") {
        if (modal.isOpen) handleNext(e);
      }
    };

    window.addEventListener("keydown", handlePressedKey);

    return () => {
      window.removeEventListener("keydown", handlePressedKey);
    };
  }, [modal]);

  const handlePrev = (e) => {
    e.stopPropagation();
    swiper.slidePrev();
  };

  const handleNext = (e) => {
    e.stopPropagation();
    swiper.slideNext();
  };

  return (
    <div
      onClick={closeModal}
      className={`fixed flex flex-col top-0 left-0 z-20 w-full max-w-screen h-full max-h-screen px-4 pt-8 bg-slate-950/50 backdrop-blur-sm justify-center items-center overflow-hidden transition-opacity ${
        modal.isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Swiper
        onSwiper={(swiper) => setSwiper(swiper)}
        slidesPerGroup={1}
        slidesPerView={1}
        centeredSlides={true}
        className="w-full h-full"
      >
        {images?.map((img, i) => (
          <SwiperSlide key={img.alt}>
            <div className="flex items-center justify-center w-full h-full">
              <img
                src={img.image.src}
                alt={img.alt}
                width={500}
                height={500}
                loading="lazy"
                className="object-contain w-full max-h-full transition-opacity ease-linear rounded cursor-pointer"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center w-full gap-8 px-4 py-8 ">
        <button
          onClick={handlePrev}
          title="Anterior"
          aria-label="Anterior"
          className="flex items-center justify-center transition ease-linear outline-none h-fit group active:scale-95 swiper-button-prev"
        >
          <ArrowBack className="transition-colors ease-linear size-8 group-hover:text-sky-400 " />
        </button>

        <button
          onClick={closeModal}
          title="Cerrar"
          aria-label="Cerrar"
          className="flex items-center justify-center transition ease-linear outline-none h-fit group active:scale-95"
        >
          <Close className="transition-colors ease-linear size-8 group-hover:text-sky-400 " />
        </button>

        <button
          onClick={handleNext}
          title="Siguiente"
          aria-label="Siguiente"
          className="flex items-center justify-center transition ease-linear outline-none h-fit group active:scale-95 swiper-button-next"
        >
          <ArrowForward className="transition-colors ease-linear size-8 group-hover:text-sky-400 " />
        </button>
      </div>
    </div>
  );
}
