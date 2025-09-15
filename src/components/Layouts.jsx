import { About, Contact, Home, Services } from "../pages/index";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Blog = () => <div>Our Blog</div>;

const sections = [
  { name: "Home", component: <Home /> },
  { name: "About", component: <About /> },
  { name: "Services", component: <Services /> },
  { name: "Contact", component: <Contact /> },
  { name: "Blog", component: <Blog /> },
];

export const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const element = document.querySelector(`[name="${sectionId}"]`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Header sections={sections} />
      <main className="min-h-[calc(100vh-var(--navbar-height))] mt-[calc(var(--navbar-height))]">
        {isHomePage ? (
          sections.map((s, i) => (
            <section key={i} name={`${s.name}`}>
              {s.component}
            </section>
          ))
        ) : (
          <Outlet />
        )}
      </main>
      <Footer sections={sections} />
    </>
  );
};
