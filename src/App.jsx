import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [doctors, setDoctors] = useState([]);

  // Realistic doctor images
  const doctorImages = [
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
    "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
    "https://images.unsplash.com/photo-1582750433449-648ed127bb54"
  ];

  // Doctor Names
  const indianDoctors = [
    "Dr. Raj Mehta",
    "Dr. Priya Sharma",
    "Dr. Ananya Kapoor",
    "Dr. Arjun Verma"
  ];

  // Specializations
  const specializations = [
    "Cardiologist",
    "Dentist",
    "Dermatologist",
    "Neurologist"
  ];

  // Doctor Full Details
  const doctorDetails = [
    `Dr. Raj Mehta
Specialization: Cardiologist
Experience: 10 Years
Qualification: MBBS, MD Cardiology (AIIMS Delhi)
Hospital: Medanta Hospital, Gurgaon
Consultation Fee: ₹1200
Available Days: Monday - Friday
Timing: 10 AM - 4 PM
Languages: English, Hindi
Rating: 4.8/5`,

    `Dr. Priya Sharma
Specialization: Dentist
Experience: 8 Years
Qualification: BDS, MDS Dentistry
Hospital: Apollo Clinic, Gurgaon
Consultation Fee: ₹800
Available Days: Monday - Saturday
Timing: 11 AM - 6 PM
Languages: English, Hindi
Rating: 4.7/5`,

    `Dr. Ananya Kapoor
Specialization: Dermatologist
Experience: 6 Years
Qualification: MBBS, MD Dermatology
Hospital: Fortis Hospital, Delhi
Consultation Fee: ₹1000
Available Days: Tuesday - Sunday
Timing: 9 AM - 3 PM
Languages: English, Hindi
Rating: 4.9/5`,

    `Dr. Arjun Verma
Specialization: Neurologist
Experience: 12 Years
Qualification: MBBS, DM Neurology
Hospital: Max Hospital, Delhi
Consultation Fee: ₹1500
Available Days: Monday - Friday
Timing: 1 PM - 7 PM
Languages: English, Hindi
Rating: 4.8/5`
  ];

  // API Fetch
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setDoctors(data.slice(0, 4)));
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>MediConnect</h2>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#doctors">Doctors</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="hero">
        <div className="hero-text">
          <h1>Your Health, Our Priority</h1>
          <p>
            Book appointments with top doctors and get healthcare
            services easily from your home.
          </p>

          <button
            onClick={() => alert("Appointment Booked Successfully!")}
          >
            Book Appointment
          </button>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1537368910025-700350fe46c7"
            alt="doctor"
          />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services">
        <h2>Our Services</h2>

        <div className="service-box">
          <div className="card">
            <h3>Online Consultation</h3>
            <p>Consult doctors anytime online.</p>
          </div>

          <div className="card">
            <h3>Medicine Delivery</h3>
            <p>Get medicines delivered at home.</p>
          </div>

          <div className="card">
            <h3>Lab Tests</h3>
            <p>Book lab tests easily online.</p>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="doctors">
        <h2>Top Doctors (API Data)</h2>

        <div className="doctor-box">
          {doctors.map((doctor, index) => (
            <div
              className="doctor-card"
              key={doctor.id}
              onClick={() => alert(doctorDetails[index])}
            >
              <img
                src={doctorImages[index]}
                alt="doctor"
              />

              <h3>{indianDoctors[index]}</h3>
              <p>{specializations[index]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Email: mediconnect@gmail.com</p>
        <p>Phone: +91 9876543210</p>
        <p>Location: Gurgaon, Haryana</p>
      </section>

      {/* Login */}
      <section id="login" className="login">
        <h2>Login</h2>

        <input type="email" placeholder="Enter Email" />
        <br /><br />

        <input type="password" placeholder="Enter Password" />
        <br /><br />

        <button
          onClick={() => alert("Login Successful")}
        >
          Login
        </button>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 MediConnect | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
