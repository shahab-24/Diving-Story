import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "animate.css";
import { Link } from "react-router-dom";

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
    <div className="my-6 mx-auto px-4 w-full overflow-hidden"> 
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        slidesPerView={1}
        className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full"  
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        }}
      >
        {data.map((adventure, index) => (
          <SwiperSlide key={adventure.id} className="relative w-full">
            <div
              className={`absolute inset-0 flex justify-center items-center text-white w-full  text-center mx-auto ${
                index % 2 === 0 ? "animate__zoomInLeft" : "animate__zoomInRight"
              }`}
            >
              <img
                src={adventure.image}
                alt={adventure.title}
                className="w-full h-full object-cover rounded-lg"
                style={{ maxWidth: "100%", height: "auto" }}  
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary animate__animated animate__bounceInDown animate__delay-1s">
                  {adventure.title}
                </h2>
                <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl opacity-75">
                  {adventure.shortDescription}
                </p>
                <Link to={`/adventureDetails/${adventure.id}`}>
                <button className="mt-8 px-6 py-3  bg-transparent text-white text-xl font-semibold rounded-full shadow-lg animate__animated animate__pulse animate__infinite hover:bg-purple-700 opacity-85  bg-pink-700">
                  Explore Now
                </button></Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
