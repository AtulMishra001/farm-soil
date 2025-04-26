import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-green-50 text-green-900">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center bg-green-100 px-4 md:px-6 py-12 md:py-16">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6">Welcome to Soil Gyan</h1>
        <p className="text-base sm:text-lg md:text-xl max-w-md sm:max-w-2xl md:max-w-3xl mb-6">
          Understand your soil. Grow smarter. Stay organic.
        </p>
        <Link
          to="/register"
          className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
        >
          Get Started
        </Link>
      </section>

      {/* About Section */}
      <section className="px-6 py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">About Soil Gyan</h2>
        <p className="max-w-md sm:max-w-2xl md:max-w-4xl mx-auto text-base sm:text-lg text-gray-700">
          Soil Gyan is a web app designed to help farmers and agriculture enthusiasts understand the soil conditions
          across India. Get data-driven insights on soil types, the most suitable crops, and natural methods to maintain fertility—without using harmful chemicals.
        </p>
      </section>

      {/* Soil Types Section */}
      <section className="px-6 py-16 bg-green-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Soil Types Across India</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 max-w-md sm:max-w-2xl md:max-w-6xl mx-auto">
          <div className="bg-white shadow-md p-6 rounded">
            <h3 className="text-xl font-semibold mb-2">Alluvial Soil</h3>
            <p className="text-base sm:text-lg">Found in Northern India. Suitable for wheat, rice, and sugarcane.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded">
            <h3 className="text-xl font-semibold mb-2">Black Soil</h3>
            <p className="text-base sm:text-lg">Found in Maharashtra and MP. Best for cotton and pulses.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded">
            <h3 className="text-xl font-semibold mb-2">Red Soil</h3>
            <p className="text-base sm:text-lg">Found in Tamil Nadu and Karnataka. Grows groundnut, millets, and more.</p>
          </div>
        </div>
      </section>

      {/* Fertility Tips Section */}
      <section className="px-6 py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Keep Soil Fertile Organically</h2>
        <ul className="max-w-md sm:max-w-2xl mx-auto text-base sm:text-lg text-gray-700 space-y-3 text-left list-disc pl-5">
          <li>Use compost and vermicompost to improve organic matter.</li>
          <li>Rotate crops to avoid nutrient depletion.</li>
          <li>Grow legumes to naturally fix nitrogen in the soil.</li>
          <li>Minimize tilling to maintain soil structure and microbes.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-16 bg-green-100 text-center">
        <h2 className="text-2xl font-bold mb-4">Join our mission to go green!</h2>
        <Link
          to="/register"
          className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
        >
          Create Your Account
        </Link>
      </section>
    </div>
  );
}

export default Home;