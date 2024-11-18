import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "animate.css";
import { Outlet } from "react-router-dom";

const Banner = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch adventure data
    fetch("/Adventures.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setData(data);
      })
      .catch((error) => console.error("Error fetching adventures:", error));
  }, []);

  return (
    <div className="banner-container my-4 border-b-1 shadow-xl">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000, // Each slide stays for 5 seconds
          disableOnInteraction: false,
        }}
        loop
        slidesPerView={1}
        className="h-[650px]"
      >
        {data.map((adventure, index) => (
          <SwiperSlide key={adventure.id} className="relative">
            <div
              className={`absolute inset-0 flex justify-center items-center text-white text-center animate__animated ${
                index % 2 === 0 ? "animate__zoomInLeft" : "animate__zoomInRight"
              }`}
            >
              <img
                src={adventure.image}
                alt={adventure.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                {/* Animated Headline */}
                <h2 className="text-4xl font-bold text-secondary animate__animated animate__bounce animate__delay-1s">
                  {adventure.title}
                </h2>
                {/* Animated Description */}
                <p className="mt-4 text-lg max-w-2xl">
                  {adventure.description}
                </p>
                <button className="mt-6 px-6 py-3 bg-secondary text-black font-semibold rounded-full shadow-lg hover:bg-yellow-400">
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
