import SmartLink from "./SmartLink";

const Footer = ({ sections }) => {
  return (
    <footer className={`bg-[#114036] text-white py-10 px-6 md:px-20`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">KY&C Services Ltd.</h3>
          <p className="text-sm text-gray-300">
            Empowering retirement with clarity, care, and community — KY&C
            Services Ltd. offers holistic support through financial planning,
            emotional wellbeing, health awareness, and peer-led engagement.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {sections.map((s, i) => (
              <li key={i} className="cursor-pointer">
                <SmartLink label={s.name} />
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Financial Planning</li>
            <li>Emotional Support</li>
            <li>Health Awareness</li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-300">Email: info@kyandc.com</p>
          <p className="text-sm text-gray-300">Phone: +234 800 000 0000</p>
          <p className="text-sm text-gray-300">Location: Remote & Global</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} KY&C Services Ltd. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
