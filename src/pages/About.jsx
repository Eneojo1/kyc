const Item = ({ title, body }) => {
  return (
    <div className="text-sm p-4 mb-2 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition">
      <strong>{title}</strong>
      <br />
      {body}
    </div>
  );
};

const About = () => {
  return (
    // <section className="bg-[#e0f5f1] pt-5">
    <section className="pt-5">
      <h1 className="px-9">About Us</h1>
      <div className="grid sm:grid-cols-2">
        <div className="px-3 sm:px-9 py-2 sm:border border-green-300 rounded-2xl m-2">
          <img
            src="/about.png"
            alt="About Us"
            loading="lazy"
            className="w-full md:w-1/3 h-auto rounded-lg object-cover md:float-left md:mr-4 md:mb-4"
          />
          <h2>Our Story</h2>
          <p>
            Retirement is often described as the “final chapter” — yet for many,
            it arrives unexpectedly, without preparation, and is widely
            misunderstood. At KY&C Services Limited, we believe this stage of
            life should not be a slow fade, but a vibrant season filled with
            purpose, joy, and dignity. Our journey began with a simple
            observation: most people spend decades working, yet only a few days
            truly planning for what comes after. The result? Retirees often face
            financial uncertainty, emotional isolation, and health challenges —
            many of which could be prevented with early preparation. KY&C
            Services was created to close this gap. We walk alongside active
            employees from their working years into retirement, ensuring they
            have the knowledge, resources, and emotional readiness to make that
            transition with confidence.
          </p>
        </div>

        <div className="px-3 sm:px-9 py-2 sm:border border-green-300 rounded-2xl m-2">
          <h2>Our Philosophy</h2>
          <p className="mb-2">
            We see retirement not as the end of a career, but as the beginning
            of freedom — a time to invest in passions, nurture relationships,
            and live with intention. Preparing for that moment requires more
            than a pension plan. It demands financial clarity, emotional
            resilience, and physical vitality. Our work is guided by three core
            beliefs:
          </p>
          <Item
            title="1. Preparation is empowerment"
            body="Knowledge equips people with the confidence to make informed choices."
          />

          <Item
            title="2. Well-being is holistic"
            body="Financial security means little without emotional and physical health."
          />

          <Item
            title="3. Community is strength"
            body="No one should navigate retirement alone."
          />
        </div>

        <div className="px-3 sm:px-9 py-2 sm:border border-green-300 rounded-2xl m-2">
          <h2>Our Mission</h2>
          <p>
            To empower individuals approaching retirement with the knowledge,
            emotional support, and health awareness they need to transition
            confidently into a purposeful and fulfilling new chapter of life.
            KY&C Services Ltd. is committed to delivering holistic,
            human-centred programs that prepare employees not just financially,
            but mentally, emotionally, and physically for retirement.
          </p>
        </div>

        <div className="px-3 sm:px-9 py-2 sm:border border-green-300 rounded-2xl m-2">
          <h2>Our Vision</h2>
          <p>
            We envision a world where retirement is not feared or misunderstood,
            but embraced as a vibrant season of freedom, growth, and connection.
            Through early preparation, community engagement, and integrated
            support, KY&C Services aims to redefine retirement as a time of
            dignity, joy, and intentional living.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
