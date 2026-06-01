import { useState } from "react";

function BikeSlider() {
  const bikes = [
    {
      name: "Classic 350",
      price: "₹1,95,000",
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
      desc: "Retro design with smooth modern performance.",
    },
    {
      name: "Himalayan 450",
      price: "₹2,85,000",
      image:
        "https://images.unsplash.com/photo-1517846693594-1567da72af75?auto=format&fit=crop&w=1200&q=80",
      desc: "Adventure-ready machine for every terrain.",
    },
    {
      name: "Hunter 350",
      price: "₹1,75,000",
      image:
        "https://images.unsplash.com/photo-1769178010870-5b8e5a0cd336?w=600&auto=format&fit=crop&q=60",
      desc: "Agile urban roadster with bold attitude.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [selectedBike, setSelectedBike] = useState(null);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % bikes.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + bikes.length) % bikes.length);
  };

  return (
    <section id="bikes">
      <div className="container">

        <h2 className="section-title">
          Featured Motorcycles
        </h2>

        <div className="slider-wrap">

          <div
            className="slider-track"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {bikes.map((bike) => (
              <div className="card" key={bike.name}>

                <div className="bike-card">

                  <img
                    src={bike.image}
                    alt={bike.name}
                  />

                  <div className="bike-info">

                    <h3>{bike.name}</h3>

                    <p>{bike.desc}</p>

                    <button
                      className="btn"
                      onClick={() =>
                        setSelectedBike(bike)
                      }
                    >
                      More Details &gt;&gt;
                    </button>

                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

        <div className="controls">
          <button onClick={prevSlide}>❮</button>
          <button onClick={nextSlide}>❯</button>
        </div>

        {selectedBike && (
          <div
            className="modal"
            style={{ display: "flex" }}
          >
            <div className="modal-content">

              <span
                className="close"
                onClick={() =>
                  setSelectedBike(null)
                }
              >
                &times;
              </span>

              <h3>{selectedBike.name}</h3>

              <p>
                <strong>Price:</strong>{" "}
                {selectedBike.price}
              </p>

              <p>{selectedBike.desc}</p>

              <button
                className="btn"
                onClick={() =>
                  alert(
                    "Booking submitted successfully!"
                  )
                }
              >
                Book Now
              </button>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default BikeSlider;