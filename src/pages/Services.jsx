import { Heart, HeartPulse } from "lucide-react";

const Services = () => {
  return (
    // <section className="bg-[#fcfee1] py-5">
    <section className="pt-5 sm:border border-[#114036] rounded-2xl m-2">
      <div className="px-3 sm:px-9">
        <h1>Our Services</h1>
        <h2 className="pt-2">What We Do Differently</h2>
        <p>
          Our approach is unique because we focus on the whole person, not just
          their finances. We understand that retirement is a life transition,
          not just a financial one. Our programs are designed to address the
          emotional, social, and physical aspects of this journey, ensuring that
          employees are not only financially prepared but also mentally and
          emotionally ready for the next chapter. We don't deliver one-off
          training sessions. We design retirement readiness journeys tailored to
          each organisation — grounded in the real-life challenges and
          aspirations of their employees. We offer a range of services that
          include:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
          <div className="text-sm p-4 mb-2 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition">
            <span className="text-5xl font-bold text-[#15af8d]">&#8358;</span>
            <h3 className="pt-2">Financial Planning</h3>
            <p>
              We empower employees to understand their pensions, investments,
              and savings with practical clarity. Our workshops demystify
              complex financial concepts, enabling informed decision-making.
            </p>
          </div>

          <div className="text-sm p-4 mb-2 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition">
            <span className="font-bold">
              <Heart size={50} className="text-[#15af8d]" />
            </span>
            <h3 className="pt-2">Emotional Support</h3>
            <p>
              We offer counselling and community-building so retirement feels
              like a transition, not a loss. Our support networks help retirees
              navigate the emotional challenges of this life stage.
            </p>
          </div>

          <div className="text-sm p-4 mb-2 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition">
            <span className="font-bold">
              <HeartPulse size={50} className="text-[#15af8d]" />
            </span>
            <h3 className="pt-2">Health Awareness</h3>
            <p>
              We promote proactive physical wellness to support long-term
              quality of life. Our health initiatives encourage retirees to stay
              active, engaged, and healthy.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row px-3 sm:px-9 py-5 sm:text-2xl rounded-b-2xl">
        <div className="py-1">
          <h2>Retirement Circle</h2>
          <p className="mb-4">
            Join our supportive community of peers sharing experiences, advice,
            and encouragement for a fulfilling retirement journey.
          </p>
          <button className="!bg-[#ffdd6c] !text-[#114036] !outline-none">
            Join the Circle
          </button>
        </div>
        <div className="sm:p-5">
          <img src="/join.jpg" alt="Join" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default Services;
