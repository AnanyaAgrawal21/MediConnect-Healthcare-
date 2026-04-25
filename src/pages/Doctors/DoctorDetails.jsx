import React from "react";

const DoctorDetails = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Doctor Details
      </h1>

      <p className="mt-4">
        Experience: 10 Years
      </p>

      <p>Specialization: Cardiology</p>

      <button className="bg-blue-600 text-white px-4 py-2 mt-5 rounded">
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorDetails;