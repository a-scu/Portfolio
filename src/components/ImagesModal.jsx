import { useState, useEffect } from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

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
                className="object-contain max-h-full transition-opacity ease rounded cursor-pointer"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center w-full gap-8 px-4 py-8 ">
        <button
          onClick={handlePrev}
          className="flex items-center justify-center transition ease outline-none h-fit group active:scale-95 swiper-button-prev"
        >
          <ion-icon
            name="chevron-back"
            class="transition-colors ease size-8 group-hover:text-blue-400"
          ></ion-icon>
        </button>

        <button
          onClick={closeModal}
          className="flex items-center justify-center transition ease outline-none h-fit group active:scale-95"
        >
          <ion-icon
            name="close"
            class="transition-colors ease size-8 group-hover:text-blue-400"
          ></ion-icon>
        </button>

        <button
          onClick={handleNext}
          className="flex items-center justify-center transition ease outline-none h-fit group active:scale-95 swiper-button-next"
        >
          <ion-icon
            name="chevron-forward"
            class="transition-colors ease size-8 group-hover:text-blue-400"
          ></ion-icon>
        </button>
      </div>
    </div>
  );
}
