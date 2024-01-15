import { useState, useEffect } from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import ImagesModal from "./ImagesModal";

const initialModal = { isOpen: false, image: null };

export default function ImagesSwiper({ images }) {
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(initialModal);

  useEffect(() => {
    setLoading(false);
  }, []);

  const openModal = (img, i) => {
    document.body.style.overflow = "hidden";
    setModal({ isOpen: true, image: img, i });
  };

  const closeModal = () => {
    document.body.style.overflow = "auto";
    setModal(initialModal);
  };

  return (
    <>
      <ImagesModal
        modal={modal}
        setModal={setModal}
        openModal={openModal}
        closeModal={closeModal}
        images={images}
      />

      <Swiper
        spaceBetween={0}
        slidesPerGroup={1}
        slidesPerView={"auto"}
        className={`h-fit mr-auto transition ease-linear ${
          loading ? "translate-y-8 opacity-0" : "opacity-100"
        }`}
      >
        {images?.map((img, i) => (
          <SwiperSlide
            key={img.alt}
            onClick={() => openModal(img, i)}
            className={`max-w-fit ${
              i === 0
                ? "pxl-4 pr-2"
                : i === images.length - 1
                ? "pr-4 "
                : "pr-2"
            }`}
          >
            <img
              src={img.image.src}
              alt={img.alt}
              className="object-contain transition-opacity ease-linear rounded cursor-pointer h-fit max-h-64 hover:opacity-90"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
