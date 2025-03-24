import React from "react";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Main Text Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Travel Smart with <span className="text-blue-600">IRCTC Express</span></h1>
        <p className="mt-2 text-gray-600">
          Book train tickets effortlessly, track journeys in real-time, and enjoy seamless
          travel experiences with India&apos;s most trusted railway platform.
        </p>
      </div>

      {/* Booking Form Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4">Book Your Train Ticket</h2>
        <div className="mb-4">
          <label className="block text-gray-700">From</label>
          <input
            type="text"
            placeholder="Enter city or station"
            className="w-full p-2 border rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">To</label>
          <input
            type="text"
            placeholder="Enter city or station"
            className="w-full p-2 border rounded mt-1"
          />
        </div>
        <button className="w-full bg-orange-500 text-white p-2 rounded">Book Ticket</button>
      </div>
    </div>
  );
};

export default Index;
