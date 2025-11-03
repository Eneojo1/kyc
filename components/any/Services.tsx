"use client";

import { Play, ThumbsUp } from "lucide-react";
import { useState } from "react";
import Modal from "../Modal";
import ComingSoon from "./ComingSoon";

interface ItemProps {
  title: string;
  body: string;
}

const Item: React.FC<ItemProps> = ({ title, body }) => {
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
