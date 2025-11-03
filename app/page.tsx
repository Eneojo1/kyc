import {
  About,
  Blog,
  Contact,
  Faqs,
  Hero,
  News,
  Services,
} from "@/components/any/index";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />

      <Suspense
        fallback={<div className="text-center py-10">Loading Blog...</div>}
      >
        <Faqs />
      </Suspense>

      {/* <Suspense
        fallback={<div className="text-center py-10">Loading Blog...</div>}
      >
        <Blog />
      </Suspense>

      <Suspense
        fallback={<div className="text-center py-10">Loading News...</div>}
      >
        <News />
      </Suspense> */}
    </>
  );
}
