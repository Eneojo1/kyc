"use client";

import { Play, ThumbsUp } from "lucide-react";
import { useState } from "react";
import Modal from "../Modal";
import ComingSoon from "./ComingSoon";

interface Props {
  title: string;
  body: string;
  src?: string;
  alt?: string;
}

const Item = ({ title, body }: Props) => {
  return (
    <div className="bg-pr3 flex gap-3 text-sm p-4 mb-2 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition">
      <ThumbsUp size={50} className="text-pr2" />
      <div>
        <h3 className="pt-2 text-pr2">{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};

const PortfolioItem = ({ title, body, src, alt }: Props) => {
  return (
    <div className="p-4 bg-pr3 m-3 rounded-xl text-xl md:text-sm shadow-md hover:shadow-lg transition">
      <img src={src} alt={alt} loading="lazy" className="rounded-xl" />
      <h4 className="pt-2 font-bold">{title}</h4>
      <p>{body}</p>
    </div>
  );
};

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="services" className="section pt-5 m-2">
      <div className="px-3 sm:px-9">
        <h1>Our Services</h1>
        <h2 className="pt-2">What We Do Differently</h2>
        <p>
          Unlike traditional financial advisory firms, our approach is
          integrated and human-centred. We combine:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
          <Item
            title="Financial Literacy"
            body="Helping employees understand their passions, investment, and savings
          with practical clarity."
          />

          <Item
            title="Emotional Support"
            body="Providing counselling and community-building so retirement feels
              like a transition, not a loss."
          />

          <Item
            title="Health Awareness"
            body="Encouraging proactive physical wellness for long-term quality of
              life."
          />
        </div>
      </div>

      <div className="flex gap-2 px-6">
        <Play className="text-pr1" size={30} />
        <p>
          We design retirement readiness journeys, not just one-off training
          sessions. Our programmes are customised to each organisation and are
          grounded in real-life challenges and aspirations of employees.
        </p>
      </div>

      <div className="p-6 mt-8 bg-se5">
        <h2>Our Portfolio</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <PortfolioItem
            src="/thrive360.jpg"
            alt="Thrive360"
            title="Thrive360 Community Product"
            body="Holistic retirement readiness through financial literacy, wellness
              programs, housing solutions, and community support."
          />

          <PortfolioItem
            src="/education.jpg"
            alt="Education"
            title="KY & C Education"
            body="Skills development, financial literacy, entrepreneurship training, and digital learning."
          />

          <PortfolioItem
            src="/realEstate.jpg"
            alt="Real Estate"
            title="KY & C Real Estate"
            body="Affordable housing projects, retirement-friendly communities, and real estate investment advisory."
          />

          <PortfolioItem
            src="/beauty.jpg"
            alt="Beauty"
            title="KY & C Beauty & Wellness"
            body="Skincare, grooming, holistic wellness centres, and preventive lifestyle management."
          />

          <PortfolioItem
            src="/foundation.jpg"
            alt="Foundation"
            title="KY & C Foundation"
            body="Scholarships, youth empowerment, financial literacy outreach, and support for vulnerable retirees."
          />
        </div>
      </div>

      <div className="bg-pr3 flex flex-col-reverse md:flex-row px-3 sm:px-9 py-5 sm:text-2xl rounded-b-2xl">
        <div className="py-1">
          <h2>Retirement Circle</h2>
          <p className="mb-4">
            Join our supportive community of peers sharing experiences, advice,
            and encouragement for a fulfilling retirement journey.
          </p>
          <button
            className="!bg-se2 !text-pr1 !outline-none"
            onClick={() => setIsModalOpen(true)}
          >
            Join the Circle
          </button>

          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ComingSoon onClose={() => setIsModalOpen(false)} />
          </Modal>
        </div>
        <div className="sm:p-5">
          <img src="/join.jpg" alt="Join" loading="lazy" />
        </div>
      </div>
      <hr className="border-pr1 border-1" />
    </section>
  );
};

export default Services;
