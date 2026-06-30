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
    <section id="about" className="pt-5">
      <h1 className="px-9">About Us</h1>
      <div className="px-9 py-2 m-2">
        <p className="mb-2">
          KY&C Services Limited is a customer-focused and forward-looking
          company dedicated to empowering lives with knowledge and care. We
          operate across Education, Social Impact, Beauty & Wellness, and Real
          Estate, providing innovative solutions that add value to individuals
          and communities at different stages of life.
        </p>

        <p>
          At the heart of our work is Thrive360, our flagship community
          platform, designed to help you prepare for and embrace retirement
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
              <p>
                At KY & C, every step we take is guided by one promise: to
                empower people with the tools, wisdom, and support they need -
                not just to survive life&apos;s transitions like retirement, but
                to truly thrive.
              </p>
            </div>
          </div>
        </div>

        <div className="px-3 sm:px-9 py-2 m-2">
          <h2>Our Philosophy</h2>
          <p className="mb-2">
            We see retirement as a transition to further invest in passions,
            nurture relationships, and live with intention. Preparing for that
            moment requires more than a pension plan. It demands financial
            clarity, emotional resilience, and physical vitality.
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

      <div className="grid sm:grid-cols-2 bg-pr3 rounded-xl m-2 mx-6">
        <div className="px-3 sm:px-9 py-2">
          <h2>Our Mission</h2>
          <p>
            Through Thrive360 and our diversified services, we help you prepare
            holistically for retirement while delivering sustainable solutions.
          </p>
        </div>

        <div className="px-3 sm:px-9 py-2 m-2">
          <h2>Our Vision</h2>
          <p>To build A world where retirement is embraced</p>
        </div>
      </div>

      <div className="bg-white py-16 px-6 md:px-14">
        <div className="max-w-6xl mx-auto bg-pr3 p-4 md:p-6 rounded-lg space-y-20">
          {team.map((member, index) => (
            <div key={index} className="overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className={`w-full md:w-1/3 h-auto rounded-xl shadow-lg object-cover object-top mb-6 md:mb-4 ${
                  member.reverse
                    ? "md:float-right md:ml-6"
                    : "md:float-left md:mr-6"
                }`}
              />

              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                Meet {member.name}
              </h2>

              <p className="text-se6 font-medium mt-2">{member.role}</p>

              <div className="mt-5 text-gray-600 leading-8 space-y-6">
                {member.description
                  .trim()
                  .split("\n\n")
                  .map((paragraph, i) => (
                    <p key={i} className="indent-8">
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-pr1 border-1" />
    </section>
  );
};

export default About;

const team = [
  {
    name: "Adaji Cynthia",
    role: "Chief Executive Officer",
    image: "/founder1.jpg",
    description: `Cynthia is the Founder and Chief Executive Officer 
    of KY&C Services Limited, a company dedicated to empowering individuals 
    through knowledge and comprehensive care. With over ten decades of 
    collective experience in strategy development, retirement planning, and 
    execution within the pension and financial services sector, Cynthia offers 
    deep expertise in business development, retirement strategy development, 
    and client relationship management. She holds an MBA and a postgraduate 
    diploma in financial engineering. Through KY&C's flagship community initiative, 
    Thrive360, Cynthia leads transformative efforts to reshape the retirement 
    experience by promoting holistic preparedness before and after retirement. 
    She also guides the company's strategic growth across education, social 
    development, wellness, and real estate sectors.`,
    reverse: false,
  },
  {
    name: "Dr. Stanley Chukwuemeka Okereafor (PhD)",
    role: "Director Strategic communication and advocacy",
    image: "/founder2.jpg",
    description: `Stanley is a seasoned development communication 
    specialist and award-winning public speaker with over 20 years of experience. 
    He excels in strategic communication, advocacy, and capacity building, creating 
    impactful national campaigns in collaboration with international agencies and the 
    Nigerian Government. Strategic communication and advocacy.
    

    Holding a PhD in Mass Communication from Bingham University and advanced training from global institutions, 
    Dr. Okereafor's expertise spans public health advocacy, knowledge management, 
    and multimedia content production. He serves as Trustee for the Johns Hopkins Public 
    Health in Nigeria Initiative and leads the Leadership School Alumni Association at 
    the African Centre for Leadership, Strategy and Development. 
    

    Author of Public Speaking: Basic Skills, Dr. Okereafor balances his professional life with passions for fitness, 
    travel, and outdoor activities.


`,
    reverse: true,
  },
];

function FoundersSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-20">
        {team.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              member.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="w-full md:w-1/2">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[420px] object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* TEXT */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                Meet {member.name}
              </h2>

              <p className="text-indigo-600 font-medium mt-2">{member.role}</p>

              <p className="mt-5 text-gray-600 leading-relaxed">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
