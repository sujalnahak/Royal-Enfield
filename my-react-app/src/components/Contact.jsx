function Contact() {
  const submitForm = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="contact">

      <div className="container">

        <h2 className="section-title">
          Contact Us
        </h2>

        <div className="box">

          <form onSubmit={submitForm}>

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <textarea
              rows="5"
              placeholder="Your Message"
            />

            <button className="btn">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;