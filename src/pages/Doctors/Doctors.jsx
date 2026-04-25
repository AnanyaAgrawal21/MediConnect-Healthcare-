import React, { useEffect, useState } from "react";

function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setDoctors(data.slice(0, 4)));
  }, []);

  return (
    <div>
      <h2>Doctors List</h2>

      {doctors.map((doctor) => (
        <div key={doctor.id}>
          <h3>{doctor.name}</h3>
          <p>{doctor.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Doctors;
