import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Skeleton from "../Components/UX/Skeleton";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const carousel = [
  {
    src: "/images/slide1.jpg",
    alt: "Image 1",
    description: "Life is beautiful",
  },
  {
    src: "/images/slide2.jpg",
    alt: "Image 2",
    description: "Nature is amazing",
  },
  {
    src: "/images/slide3.jpg",
    alt: "Image 3",
    description: "Sunset is breathtaking",
  },
];

export default function ImageCarousel() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    carousel.forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === carousel.length) setLoaded(true);
      };
    });
  }, []);

  if (!loaded) {
    return <Skeleton className="w-full h-100" />;
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto group">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        className="w-full rounded-xl overflow-hidden"
      >
        {carousel.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-96 relative">
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <p className="absolute bottom-10 left-0 right-0 text-center text-white text-sm">
                {slide.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="prev-btn absolute left-2 top-1/2 -translate-y-1/2 z-10">
        <BsChevronLeft size={20} />
      </button>
      <button className="next-btn absolute right-2 top-1/2 -translate-y-1/2 z-10">
        <BsChevronRight size={30} />
      </button>

      <div className="custom-pagination absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2"></div>
    </div>
  );
}

       
