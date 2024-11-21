import { useEffect, useState } from "react";
import "aos/dist/aos.css";


const Gallery = () => {
  const [images, setImages] = useState([]);

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
  }, []);

  return (
    <div className="relative overflow-hidden bg-gray-100 py-8 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Adventure Gallery</h1>
      <div className="gallery-container flex gap-8">
        {images.map((img, index) => (
          <div
            key={`${img.id}-${index}`} 
    
            
            className={`relative group rounded-lg shadow-lg overflow-hidden  animate__animated animate-floating animat__slow  ${
              index % 2 === 0 ? "w-60 h-40" : "w-40 h-60"
            }`}
          >
            <img
              src={img.image}
              alt={img.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-125 group-hover:z-10"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{img.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
