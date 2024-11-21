import { useEffect, useState } from "react";
import "animate.css";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [showStaticGallery, setShowStaticGallery] = useState(false);

  useEffect(() => {
    fetch("/Adventures.json")
      .then((res) => res.json())
      .then((data) => {
        const allImages = data.map((adventure) => ({
          id: adventure.id,
          title: adventure.title,
          image: adventure.image,
        }));
        setImages([...allImages, ...allImages]); 
      })
      .catch((error) => console.error("Error fetching images:", error));

  
    const timer = setTimeout(() => setShowStaticGallery(true), 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gray-100 py-8 min-h-screen mt-20 pt-20">
      <h1 className="text-3xl font-bold text-center mb-8">Adventure Gallery</h1>

      {!showStaticGallery ? (
      
        <div className="flex flex-wrap justify-center gap-4">
          {images.map((img, index) => (
            <div
              key={`${img.id}-${index}`}
              className={`relative rounded-lg shadow-lg overflow-hidden ${
                index % 2 === 0 ? "w-60 h-40" : "w-40 h-60"
              } animate__animated animate__fadeInDown`}
              style={{
                animationDelay: `${index * 0.2}s`, 
                animationDuration: "1s",
                animationFillMode: "forwards",
              }}
            >
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-full object-cover floating" continuous effect
              />
            </div>
          ))}
        </div>
      ) : (
      
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div
              key={`${img.id}-${index}`}
              className={`relative rounded-lg shadow-lg overflow-hidden ${
                index % 3 === 0
                  ? "w-full h-48"
                  : index % 3 === 1
                  ? "w-full h-64"
                  : "w-full h-56"
              }`}
            >
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-full object-cover floating" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
