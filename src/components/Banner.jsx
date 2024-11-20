import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "animate.css";

const Banner = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/Adventures.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error fetching adventures:", error));
  }, []);

  return (
    <div className="banner-container my-4 border-b-1 shadow-xl">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        slidesPerView={1}
        className="h-[650px]"
      >
        {data.map((adventure, index) => (
          <SwiperSlide key={adventure.id} className="relative">
            <div
              className={`absolute inset-0 flex justify-center items-center text-white text-center ${
                index % 2 === 0 ? "animate__zoomInLeft" : "animate__zoomInRight"
              }`}
            >
              <img
                src={adventure.image}
                alt={adventure.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold text-secondary animate__animated animate__bounceInDown animate__delay-1s">
                  {adventure.title}
                </h2>

                <p className="mt-4 text-lg max-w-2xl opacity-55">
                  {adventure.shortDescription}
                </p>
                <button className="mt-10 px-6 py-3 bg-secondary bg-transparent text-white text-xl font-semibold rounded-full shadow-lg hover:bg-yellow-400 opacity-55">
                  Explore Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
