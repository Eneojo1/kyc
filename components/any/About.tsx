"use client";
import Image from "next/image";

interface ItemProps {
  title: string;
  body: string;
}

const Item: React.FC<ItemProps> = ({ title, body }) => {
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
    <section id="about" className="section pt-5">
      <h1 className="px-9">About Us</h1>
      <div className="px-9 py-2 m-2">
        <p className="mb-2">
          KY&C Services Limited is a forward-looking company dedicated to
          empowering lives with knowledge and care. We operate across Education,
          Real Estate, Beauty & Wellness, and Social Impact, providing
          innovative solutions that add value to individuals and communities at
          different stages of life.
        </p>

        <p>
          At the heart of our work is Thrive360, our flagship community
          platform, designed to help people prepare for and embrace retirement
          holistically—financially, socially, and emotionally.
        </p>
      </div>
      <div className="grid sm:grid-cols-2">
        <div className="px-3 sm:px-9 py-2 m-2">
          <img
            src="/about.png"
            alt="About Us"
            loading="lazy"
            className="w-full md:w-1/3 h-auto rounded-lg object-cover md:float-left md:mr-4 md:mb-4"
          />
          <h2>Our Story</h2>
          <div>
            <p className="mb-2">
              At KY & C Services Limited, we believe life&apos;s most important
              stages should be faced with confidence, not confusion. Our journey
              began with a simple idea: when knowledge is paired with genuine
              care, it can transform how people live and experience life.
            </p>
            <p>
              That vision gave birth to Thrive360, our flagship community, where
              people can learn, share and prepare for life after work in a
              holistic way.
            </p>
            <div className="mt-7">
              <h2>Our Commitment</h2>
              At KY & C, every step we take is guided by one promise: to empower
              people with the tools, wisdom, and support they need - not just to
              survive life&apos;s transitions like retirement, but to truly
              thrive.
            </div>
          </div>
        </div>

        <div className="px-3 sm:px-9 py-2 m-2">
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
            body="Knowledge gives people confidence to make better choices."
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
      </div>

      <div className="grid sm:grid-cols-2  bg-pr3">
        <div className="px-3 sm:px-9 py-2">
          <h2>Our Mission</h2>
          <p>
            Through Thrive360 and our diversified services, we help people
            prepare holistically for retirement while delivering sustainable
            solutions in Education, real estate, wellness, and social impact
          </p>
        </div>

        <div className="px-3 sm:px-9 py-2 m-2">
          <h2>Our Vision</h2>
          <p>
            To build a world where retirement is not feared, but embraced - a
            thriving stage of life supported by knowledge, wellness, and care
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:items-stretch p-6 pt-2">
        <div className="w-full sm:w-1/2 flex justify-center">
          <img
            src="/founder.jpg"
            alt="ceo"
            loading="lazy"
            className="rounded-mobile-top object-cover h-auto"
          />
        </div>

        <div className="w-full sm:w-1/2 rounded-mobile-bottom p-6 sm:text-xl bg-pr1 text-white">
          <h2 className="!text-4xl font-semibold mb-4">Our Founder</h2>
          <p className="mb-5">
            <strong>Adaji Cynthia</strong> is the Founder and Chief Executive
            Officer of KY&C Services Limited, a company dedicated to empowering
            lives with knowledge and care. With over eight years of experience
            in the pension and financial services industry, she has built
            expertise in business development, retirement planning, and client
            engagement.
          </p>

          <p>
            Cynthia holds an MBA and is currently pursuing a Postgraduate
            Diploma in Financial Engineering. Through Thrive360, KY&C&apos;s
            flagship community product, she leads efforts to redefine retirement
            by promoting holistic readiness—both before and after
            retirement—while also driving the company&apos;s broader impact in
            education, real estate, wellness, and social initiatives.
          </p>
        </div>
      </div>

      <hr className="border-pr1 border-1" />
    </section>
  );
};

export default About;
