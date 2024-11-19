

const WhyChooseEcoAdventures = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-green-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Why Choose Eco-Adventures?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex items-center">
          <img
            src="https://i.ibb.co.com/YW3F3tL/mika-baumeister-UFWNRw-WQE8-unsplash.jpg"
            alt="Eco-Friendly"
            className="w-40 h-40 rounded-lg shadow-md mr-4"
          />
          <p className="text-gray-700">
            Eco-Adventures promote sustainable tourism by preserving nature and minimizing environmental impact.
          </p>
        </div>
        <div className="flex items-center">
          <img
            src="https://i.ibb.co.com/8PDp8DX/imsogabriel-stock-lw-LZs-U3-Jpts-unsplash.jpg"
            alt="Community"
            className="w-40 h-40 rounded-lg shadow-md mr-4"
          />
          <p className="text-gray-700">
            Engage with local communities and support their development through responsible travel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseEcoAdventures;
