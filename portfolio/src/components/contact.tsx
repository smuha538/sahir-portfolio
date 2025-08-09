import { useState } from "react";
import RevealUp from "./revealUp";

function Contact() {
  const [result, setResult] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c3c58035-029c-4bf1-a67f-30ea3308466a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealUp>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6 bg-[url(/images/form.svg)] rounded-lg">
          <h2 className="text-3xl mb-8 text-white outfit-title text-center shadow-2xl">
            Let's get in touch
          </h2>
          <form className="space-y-6 outfit-text" onSubmit={onSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Name"
      
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Email"
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message"
              />
            </div>

            <button
              type="submit"
              className="w-full text-white button-black py-3 px-6 rounded-lg transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(60,135,250,0.4)] border-white"
            >
              Send Message
            </button>
          </form>
          <span className="text-white">{result}</span>
        </div>
      </RevealUp>
    </section>
  );
};

export default Contact