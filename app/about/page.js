'use client';

export default function About() {  // Default export
  return (
<div className="flex flex-col items-center justify-center min-h-screen  bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg">Discover our mission, team, and values.</p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mb-12 py-8 ">
        <div className="md:w-1/2">
          <img
            src="/assets/images/mission.jpg"
            alt="Our Mission"
            className="rounded-lg shadow-lg mb-6 md:mb-0"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            Our mission is to deliver reliable and accurate weather information that helps you plan your day, stay safe, and be prepared for any weather conditions. We use cutting-edge technology and data from trusted sources to bring you the best weather forecasting experience.
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="flex flex-col md:flex-row-reverse items-center justify-between w-full max-w-4xl mb-12">
        <div className="md:w-1/2">
          <img
            src="/assets/images/team.jpg"
            alt="Our Team"
            className="rounded-lg shadow-lg mb-6 md:mb-0"
          />
        </div>
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
          <p className="text-gray-600 mb-4">
            Our team is composed of passionate meteorologists, data scientists, and software developers dedicated to providing you with the best weather information. We work around the clock to ensure that you receive accurate and timely weather updates.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2 text-blue-600">Accuracy</h3>
            <p className="text-gray-600">
              We prioritize accuracy in our forecasts to ensure that you can trust the information we provide.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2 text-blue-600">Reliability</h3>
            <p className="text-gray-600">
              We strive to deliver consistent and reliable weather data, so you're always prepared for what's ahead.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2 text-blue-600">Innovation</h3>
            <p className="text-gray-600">
              We embrace innovation to continuously improve our services and provide you with the best experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
