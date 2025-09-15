import { createContext, useState } from "react";

export const ContextApi = createContext();

export const ContextProvider = ({ children }) => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [user, setUser] = useState({
    id: 1,
    fname: "Eneojo",
    oname: "Richard",
    lname: "Amobeda",
    photos: ["/images/user3.jpg"],
    sex: "M",
    email: "ear4007@yahoo.com",
    status: 1,
  });

  return (
    <ContextApi.Provider value={{ user, navbarHeight, setNavbarHeight }}>
      {children}
    </ContextApi.Provider>
  );
};
