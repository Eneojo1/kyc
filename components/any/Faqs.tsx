"use client";
import { create } from "domain";
import { ChevronDown, Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    category: "General Understanding",
    question: "What is KY&C Services Limited and what does it do?",
    answer:
      "KY&C Services is a retirement readiness consultancy that supports individuals and organisations in preparing for retirement holistically — financially, emotionally, and physically.",
    createdAt: "2024-06-19T12:34:56Z",
    updatedAt: "2024-06-19T12:34:56Z",
  },

  {
    id: 2,
    category: "General Understanding",
    question: "Who can benefit from KY&C's services?",
    answer:
      "Our programs are designed for active employees approaching retirement, HR departments, and organisations seeking to support staff through life transitions.",
    createdAt: "2024-06-19T12:34:56Z",
    updatedAt: "2024-06-19T12:34:56Z",
  },

  {
    id: 3,
    category: "General Understanding",
    question:
      "How is KY&C different from traditional retirement planning services?",
    answer:
      "We go beyond pensions and savings — our approach includes emotional support, health awareness, and community-building to ensure retirees thrive in every aspect of life.",
    createdAt: "2024-06-19T12:34:56Z",
    updatedAt: "2024-06-19T12:34:56Z",
  },

  {
    id: 4,
    category: "Program Details",
    question: "What does a “retirement readiness journey” include?",
    answer:
      "It includes tailored workshops, counselling, wellness initiatives, and peer support circles — all designed to prepare individuals for the emotional, financial, and lifestyle shifts of retirement.",
    createdAt: "2024-06-19T12:34:56Z",
    updatedAt: "2024-06-19T12:34:56Z",
  },

  {
    id: 5,
    category: "Program Details",
    question: "Are your services one-time sessions or ongoing support?",
    answer:
      "We offer structured, ongoing programs rather than one-off sessions. Our goal is to walk alongside clients throughout the transition.",
    createdAt: "2024-06-19T12:34:56Z",
    updatedAt: "2024-06-19T12:34:56Z",
  },

  {
    id: 6,
    category: "Program Details",
    question:
      "Can KY&C work with organisations to design custom retirement programs?",
    answer:
      "Absolutely. We collaborate with employers to create bespoke retirement journeys that reflect the needs and aspirations of their workforce.",
    createdAt: "2024-06-19T12:34:56Z",
    updatedAt: "2024-06-19T12:34:56Z",
  },

  {
    id: 7,
    category: "Financial Planning",
    question: "Do you offer personal financial advice or investment services?",
    answer:
      "We provide educational workshops and clarity on pensions, savings, and investments — but we do not offer regulated financial advice or sell financial products.",
    createdAt: "2024-06-19T12:34:56Z",
    updatedAt: "2024-06-19T12:34:56Z",
  },

  {
    id: 8,
    category: "Financial Planning",
    question: "Will you help me understand my pension options?",
    answer:
      "Yes. Our financial planning sessions demystify pension schemes and help you make informed decisions.",
    createdAt: "2024-06-19T12:34:56Z",
    updatedAt: "2024-06-19T12:34:56Z",
  },

  {
    id: 9,
    category: "Financial Planning",
    question: "What kind of emotional support do you offer?",
    answer:
      "We provide access to counselling, peer support groups, and resources to help individuals navigate the psychological aspects of retirement.",
    createdAt: "2024-06-19T12:34:56Z",
    updatedAt: "2024-06-19T12:34:56Z",
  },

  {
    id: 10,
    category: "Financial Planning",
    question: "How do you promote health awareness?",
    answer:
      "Through wellness workshops, fitness guidance, and proactive health education tailored to the needs of aging individuals.",
    createdAt: "2024-06-19T12:34:56Z",
    updatedAt: "2024-06-19T12:34:56Z",
  },

  {
    id: 11,
    category: "Community & Engagement",
    question: "What is the Retirement Circle?",
    answer:
      "It's a supportive community of retirees and near-retirees who share experiences, advice, and encouragement — fostering connection and purpose.",
    createdAt: "2024-06-19T12:34:56Z",
    updatedAt: "2024-06-19T12:34:56Z",
  },

  {
    id: 12,
    category: "Community & Engagement",
    question: "Is the Retirement Circle open to everyone?",
    answer:
      "Yes, anyone approaching or already in retirement can join. We welcome diverse backgrounds and experiences.",
    createdAt: "2024-06-19T12:34:56Z",
    updatedAt: "2024-06-19T12:34:56Z",
  },

  {
    id: 13,
    category: "Getting Started",
    question: "How do I enroll in a KY&C program?",
    answer:
      "You can contact us through our website or speak to your HR department if your organisation partners with KY&C.",
    createdAt: "2024-06-19T12:34:56Z",
    updatedAt: "2024-06-19T12:34:56Z",
  },

  {
    id: 14,
    category: "Getting Started",
    question: "Is there a cost to participate?",
    answer:
      "Costs vary depending on the program and whether it's employer-sponsored. We'll provide transparent pricing during your consultation.",
    createdAt: "2024-06-19T12:34:56Z",
    updatedAt: "2024-06-19T12:34:56Z",
  },

  {
    id: 15,
    category: "Getting Started",
    question: "Can I speak to someone before committing?",
    answer:
      "Of course. We offer free initial consultations to help you explore your options and find the right fit.",
    createdAt: "2024-06-19T12:34:56Z",
    updatedAt: "2024-06-19T12:34:56Z",
  },
];

const groupedFAQs = faqs.reduce((acc, item) => {
  if (!acc[item.category]) acc[item.category] = [];
  acc[item.category].push(item);
  return acc;
}, {} as Record<string, typeof faqs>);

const Faqs = () => {
  const [openTitle, setOpenTitle] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleTitle = (title: string) => {
    setOpenTitle(openTitle === title ? null : title);
    setOpenIndex(null);
  };

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="FAQS" className="section pt-5 max-w-4xl mx-auto px-4">
      <h1 className="px-9">Frequently Asked Questions</h1>

      <p className="text-center text-gray-600 mb-10">
        Here are some common questions about KY&C Services Limited and
        retirement readiness.
      </p>

      <div className="space-y-0">
        {Object.entries(groupedFAQs).map(([title, items]) => (
          <div key={title} className="divide-y divide-gray-200">
            <div
              onClick={() => toggleTitle(title)}
              className="flex justify-between cursor-pointer p-3"
            >
              <h2>{title}</h2>
              <span
                className={`transition-transform duration-500 ease-in-out ${
                  openTitle === title ? "rotate-180" : "rotate-0"
                }`}
              >
                {openTitle === title ? <Minus /> : <Plus />}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-900 ease-in-out ${
                openTitle === title
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="divide-y divide-gray-200">
                {items.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-redu-50 first:border-t last:border-b border-gray-200"
                  >
                    <div
                      onClick={() => toggle(index)}
                      className="flex justify-between w-full cursor-pointer font-medium px-3 py-2 items-center"
                    >
                      {faq.question}
                      <ChevronDown
                        className={`text-gray-500 transition-transform duration-500 ease-in-out ${
                          openIndex === index ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-900 ease-in-out ${
                        openIndex === index
                          ? "max-h-screen opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {/* {faq.answer} */}
                      <div className="px-6 pb-4 text-gray-700">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
