import { useState, useEffect } from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const initialModal = { isOpen: false, image: null };

export default function ImagesSwiper({ images }) {
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(initialModal);

  useEffect(() => {
    setLoading(false);

    const handleTeclaPresionada = (e) => {
      if (e.key === "ArrowLeft") {
        console.log("Flecha izquierda presionada");
        handlePrev(e);
      } else if (e.key === "ArrowRight") {
        console.log("Flecha derecha presionada");
        handleNext(e);
      }
    };

    window.addEventListener("keydown", handleTeclaPresionada);

    return () => {
      window.removeEventListener("keydown", handleTeclaPresionada);
    };
  }, []);

  const handlePrev = (e) => {
    e.stopPropagation();

    setModal((prevModal) => {
      const index = images.findIndex((img) => img === prevModal.image);
      if (index !== -1) {
        const previousIndex = (index - 1 + images.length) % images.length;
        return { ...prevModal, image: images[previousIndex] };
      }
      return prevModal;
    });
  };

  const handleNext = (e) => {
    e.stopPropagation();

    setModal((prevModal) => {
      const index = images.findIndex((img) => img === prevModal.image);
      if (index !== -1) {
        const nextIndex = (index + 1) % images.length;
        return { ...prevModal, image: images[nextIndex] };
      }
      return prevModal;
    });
  };

  const openModal = (img) => {
    document.body.style.overflow = "hidden";
    setModal({ isOpen: true, image: img });
  };

  const closeModal = () => {
    document.body.style.overflow = "auto";
    setModal(initialModal);
  };

  return (
    <>
      <div
        onClick={closeModal}
        className={`fixed flex flex-col top-0 left-0 z-20 w-full max-w-screen h-full max-h-screen px-4 pt-8 pb-24 bg-slate-950/50 backdrop-blur-sm justify-center items-center overflow-hidden transition-opacity ${
          modal.isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {modal.image && (
          <img
            src={modal.image.image.src}
            alt={modal.image.alt}
            className="object-contain max-h-full rounded h-min"
          />
        )}

        <div className="absolute bottom-0 flex justify-center w-full gap-8 p-8">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center transition ease-linear outline-none h-fit group active:scale-95"
          >
            <ion-icon
              name="chevron-back"
              class="size-8 group-hover:text-blue-400 transition-colors ease-linear"
            ></ion-icon>
          </button>
          <button
            onClick={closeModal}
            className="flex items-center justify-center transition ease-linear outline-none h-fit group active:scale-95"
          >
            <ion-icon
              name="close"
              class="size-8 group-hover:text-blue-400 transition-colors ease-linear"
            ></ion-icon>
          </button>
          <button
            onClick={handleNext}
            className="flex items-center justify-center transition ease-linear outline-none h-fit group active:scale-95"
          >
            <ion-icon
              name="chevron-forward"
              class="size-8 group-hover:text-blue-400 transition-colors ease-linear"
            ></ion-icon>
          </button>
        </div>
      </div>

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
            onClick={() => openModal(img)}
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
