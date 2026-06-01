import { useEffect, useState } from "react";

function Reviews() {
  const reviews = [
    "★★★★★ The Classic 350 feels like pure motorcycling heritage. – Arjun",
    "★★★★★ Himalayan is perfect for long adventures. – Priya",
    "★★★★★ Hunter 350 is the most fun city bike I’ve owned. – Rahul",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews">
      <div className="container">

        <h2 className="section-title">
          Customer Reviews
        </h2>

        <div className="review active">
          {reviews[index]}
        </div>

      </div>
    </section>
  );
}

export default Reviews;