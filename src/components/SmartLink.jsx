import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const SmartLink = ({ label, to, onSetActive, ...props }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // ✅ If explicit "to" prop given, treat it as a page navigation
  if (to) {
    return (
      <RouterLink to={to} className="link" {...props}>
        {label}
      </RouterLink>
    );
  }

  if (isHomePage) {
    return (
      <ScrollLink
        to={label}
        smooth={true}
        duration={500}
        spy={true}
        offset={-70}
        onSetActive={() => onSetActive?.(label)}
        {...props}
      >
        {label}
      </ScrollLink>
    );
  }

  return (
    <RouterLink to={`/#${label}`} {...props}>
      {label}
    </RouterLink>
  );
};

export default SmartLink;
