import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navlinks = () => {
  const location = useLocation();

  const links = [
    {
      to: "/home",
      exact: true,
      title: "Home",
    },
    {
      to: "/schedule",
      exact: false,
      title: "Schedule",
    },
    {
      to: "/time",
      exact: false,
      title: "Time",
    },
    {
      to: "/projects",
      exact: false,
      title: "Projects",
    },
    {
      to: "/clients",
      exact: false,
      title: "Clients",
    },
    {
      to: "/timer",
      exact: false,
      title: "Team",
    },
    {
      to: "/reports",
      exact: false,
      title: "Reports",
    },
    {
      to: "/invoices",
      exact: false,
      title: "Invoices",
    },
  ];

  return (
    <div>
      {links.map(({ to, exact, title }, index) => (
        <NavLink
          key={to}
          style={{
            color: `${to === location.pathname ? "#000000" : "#666666"}`,
            textDecoration: "none",
            marginRight: "30px",
            paddingBottom: "18px",
            borderBottom: `${
              to === location.pathname ? "2px solid #24be6a" : "none"
            }`,
          }}
          to={to}
          exact={exact}
          onMouseOver={(e) => {
            e.target.style.color = "#000000";
          }}
          onMouseLeave={(e) => {
            e.target.style.color =
              to !== location.pathname ? "#666666" : "#000000";
          }}
        >
          {title}
        </NavLink>
      ))}
    </div>
  );
};

export default Navlinks;
