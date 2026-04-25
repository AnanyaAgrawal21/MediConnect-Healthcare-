import hero1 from "../assets/images/hero-img01.png";
import hero2 from "../assets/images/hero-img02.png";
import hero3 from "../assets/images/hero-img03.png";

import doctor1 from "../assets/images/doctor-img01.png";
import doctor2 from "../assets/images/doctor-img02.png";
import doctor3 from "../assets/images/doctor-img03.png";

import aboutImg from "../assets/images/about.png";
import featureImg from "../assets/images/feature-img.png";
import faqImg from "../assets/images/faq-img.png";

function Home() {
  return (
    <div>

      {/* Navbar */}
      <nav className="navbar">
        <h1>MediConnect</h1>

        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Doctors</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div>
          <h2>We Help Patients Live a Healthy Life</h2>
          <p>Book appointments with trusted doctors instantly.</p>
          <button>Book Appointment</button>
        </div>

        <div className="hero-images">
          <img src={hero1} alt="hero1" />
          <img src={hero2} alt="hero2" />
          <img src={hero3} alt="hero3" />
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <img src={aboutImg} alt="about" />

        <div>
          <h2>About MediConnect</h2>
          <p>
            MediConnect helps patients connect with top doctors,
            book appointments, and manage healthcare easily.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Our Features</h2>

        <img src={featureImg} alt="feature" />

        <div className="cards">
          <div>Doctor Search</div>
          <div>Appointment Booking</div>
          <div>Online Payment</div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="doctors">
        <h2>Our Doctors</h2>

        <div className="doctor-cards">

          <div className="card">
            <img src={doctor1} alt="doctor1" />
            <h3>Dr. Sharma</h3>
            <p>Cardiologist</p>
          </div>

          <div className="card">
            <img src={doctor2} alt="doctor2" />
            <h3>Dr. Mehta</h3>
            <p>Neurologist</p>
          </div>

          <div className="card">
            <img src={doctor3} alt="doctor3" />
            <h3>Dr. Gupta</h3>
            <p>Dermatologist</p>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div>
          <h2>FAQs</h2>
          <p>Get answers to common healthcare questions.</p>
        </div>

        <img src={faqImg} alt="faq" />
      </section>

      {/* Footer */}
      <footer>
        <h2>MediConnect</h2>
        <p>Helping patients live healthier lives.</p>
      </footer>

    </div>
  );
}

export default Home;