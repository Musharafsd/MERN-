import { Link } from "react-router-dom";

const First = () => {
  
  return (
    <div className="services-page">

      <div className="banner">
        <div className="banner-track">
          <img src="https://obc.edu/wp-content/uploads/2022/09/electrician-facts.jpg" alt="Electrician" />
          <img src="https://getintotheatre.org/wp-content/uploads/2023/01/shutterstock_790159837-scaled-1.jpg" alt="Carpenter" />
          <img src="https://adoptostaging.blob.core.windows.net/media/plumber-job-description-template-tQh1-P.jpg" alt="Plumber" />
          <img src="https://performanceautospecialists.com/wp-content/uploads/2019/05/46212975_m.jpg" alt="Mechanic" />
          <img src="https://media.istockphoto.com/id/1436029539/photo/happy-house-painter-working-on-home-renovation-process.jpg?s=612x612&w=0&k=20&c=LojpmhZ2V9TIRyU7LiMHdYY7StaUXxakDVY5GBjmj0U=" alt="Painter" />
        </div>
      </div>

      <h2 className="title">Our Professional Services</h2>
      <div className="services">
        {[
          "Electrician",
          "Carpenter",
          "Painter",
          "Mechanic",
          "Technician",
          "Mason",
          "Locksmith",
          "Roofer",
          "Gardener"
        ].map((service, i) => (
          <div className="service-card" key={i}>
            <h3>{service}</h3>
            <p>Trusted & verified professionals available at your doorstep.</p>
          </div>
        ))}
      </div>

      <div className="register">
        <h2>How to Register</h2>
        <div className="steps">
          <div className="step">1️ Create Account</div>
          <div className="step">2️ Add Your Service</div>
          <div className="step">3️ Get Verified</div>
          <div className="step">4️ Start Getting Orders</div>
        </div>
      </div>

      <div className="gallery">
       <img src="https://obc.edu/wp-content/uploads/2022/09/electrician-facts.jpg" alt="Electrician" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ZPJfmskUsLF083aure9YGDtCC3I6MsDYIQ&s" alt="Carpenter" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbH-jCNDY-jeOpsTqQI3W66jpQToV4moCLRg&s" alt="Painter" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbJbXArW52rq6OJa7xxnzuP6KmWBUqYg-pGg&s" alt="Mechanic" />
      </div>

      <footer className="footer">
        <div>
          <h3>HomeFix Services</h3>
          <p>Reliable home services at your convenience.</p>
        </div>
        <div>
          <p> +91 98765 43210</p>
          <p> support@homefix.com</p>
          <p> India</p>
        </div>
      </footer>

    </div>
  );
};

export default First;
