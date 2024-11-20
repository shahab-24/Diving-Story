import { useEffect, useState } from "react";
import "animate.css";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from JSON data
    fetch("/Adventures.json")
      .then((res) => res.json())
      .then((data) => {
        const allImages = data.map((adventure) => ({
          id: adventure.id,
          title: adventure.title,
          image: adventure.image,
        }));
        setImages(allImages);
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Adventure Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div
            key={img.id}
            className={`relative group rounded-lg shadow-lg overflow-hidden animate__animated animate__fadeIn ${
              index % 2 === 0 ? "h-48" : "h-64"
            }`}
          >
            <img
              src={img.image}
              alt={img.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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
