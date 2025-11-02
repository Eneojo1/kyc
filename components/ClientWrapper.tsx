"use client";

import Header from "./Header";
import Footer from "./Footer";
import { PropsWithChildren, useState } from "react";
import { ContextProvider } from "@/shared/context";

// Section observation for active tab updates
const sections = [
  "home",
  "about",
  "services",
  // "contact",
  "FAQS",
  // "blog",
];

const ClientWrapper = ({ children }: PropsWithChildren) => {
  const [navHeight, setNavHeight] = useState(0);
  return (
    <ContextProvider>
      <Header onHeightChange={setNavHeight} sections={sections} />
      <main style={{ paddingTop: navHeight }}>{children}</main>
      <Footer sections={sections} />
    </ContextProvider>
  );
};

export default ClientWrapper;
