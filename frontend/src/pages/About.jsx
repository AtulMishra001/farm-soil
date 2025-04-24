function About() {
    return (
      <div className="bg-green-50 min-h-screen">
        {/* Background Image */}
        <div
          className="w-full h-[50vh] bg-cover "
          style={{
            backgroundImage: "url('https://www.villagesquare.in/wp-content/uploads/2023/05/Lead-01-30-1.jpg')", // Replace with your image URL
          }}
        ></div>
  
        {/* Content Section */}
        <div className="container mx-auto px-4 py-8">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-green-700  mb-2">
            About Us
          </h1>
          <div className="w-16 h-1 bg-green-600  mb-6"></div>
  
          {/* Paragraph */}
          <p className="text-gray-700 text-lg  leading-relaxed">
            Farm Soil is a college project created to help people grow their crops
            and plants more efficiently. Our goal is to provide valuable insights
            and tools to farmers and gardeners, enabling them to make informed
            decisions and achieve better results. Whether you're a professional
            farmer or a hobbyist gardener, Farm Soil is here to support you in
            your journey toward sustainable and successful farming.
          </p>
        </div>
      </div>
    );
  }
  
  export default About;