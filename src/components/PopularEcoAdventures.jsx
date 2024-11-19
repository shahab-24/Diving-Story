import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const PopularEcoAdventures = ({ adventures }) => {
  return (
    <div className="container mx-auto px-4 py-8 my-10">
      <h2 className="text-2xl font-bold text-center mb-6">Popular Eco-Adventures</h2>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop
        slidesPerView={1}
        className="h-[400px]"
      >
        {adventures.map((adventure) => (
          <SwiperSlide key={adventure.id} className="relative">
            <div className="h-full w-full flex flex-col items-center justify-center bg-gray-900 text-white rounded-lg shadow-xl p-6">
              <img
                src={adventure.image}
                alt={adventure.title}
                className="w-full h-80 object-cover rounded-lg mb-4 animate__animated animate__flipOutX animate__delay-3s"
              />
              <h3 className="text-xl font-semibold animate__animated animate__lightSpeedInRight animate__delay-1s">{adventure.title}</h3>
              <p className="mt-2 text-sm">{adventure.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularEcoAdventures;


