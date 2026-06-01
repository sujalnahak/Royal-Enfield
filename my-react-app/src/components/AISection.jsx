import { useState } from "react";

function AISection() {
  const [result, setResult] = useState(
    "Choose your riding purpose to get the best model."
  );

  const recommendBike = (purpose) => {
    if (purpose === "city")
      setResult(
        "Recommended: Hunter 350 – Light, agile and perfect for urban roads."
      );

    if (purpose === "touring")
      setResult(
        "Recommended: Classic 350 – Comfortable and iconic for long rides."
      );

    if (purpose === "adventure")
      setResult(
        "Recommended: Himalayan 450 – Built for mountains and rough terrain."
      );
  };

  return (
    <section id="ai">
      <div className="container">
        <h2 className="section-title">
          AI Bike Recommendation
        </h2>

        <div className="box">

          <select
            onChange={(e) =>
              recommendBike(e.target.value)
            }
          >
            <option value="">Select Purpose</option>
            <option value="city">City Riding</option>
            <option value="touring">Touring</option>
            <option value="adventure">Adventure</option>
          </select>

          <div id="aiResult">{result}</div>

        </div>
      </div>
    </section>
  );
}

export default AISection;