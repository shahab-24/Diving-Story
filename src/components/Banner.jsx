import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade } from "swiper";
import ScrollAnimation from "react-animate-on-scroll";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "animate.css/animate.min.css";
import { Autoplay, EffectFade } from "swiper/modules";
import 'animate.css';




const Banner = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/Adventures.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="banner-container ">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 1000 }}
        
        loop
        slidesPerView={1}
        className="h-[650px]"
      >
        {data.map((adventure) => (
          <SwiperSlide key={adventure.id}  className="relative animate__animated animate__lightSpeedInRight">
            <img
              src={adventure.image}
              alt={adventure.title}
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
              {/* Animated Headline */}
              <ScrollAnimation animateIn="fadeInDown" animateOnce={true} duration={1}>
                <h2 className="text-4xl font-bold text-secondary  animate__animated animate__bounce">{adventure.title}</h2>
              </ScrollAnimation>
              {/* Animated Description */}
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={300} duration={1.2}>
                <p className="mt-2 text-lg max-w-2xl">{adventure.description}</p>
              </ScrollAnimation>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
