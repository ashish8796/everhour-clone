import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navlinks = () => {
  const location = useLocation();

  const links = [
    {
      to: "/",
      exact: true,
      title: "Home",
    },
    // {
    //   to: "/schedule",
    //   exact: false,
    //   title: "Schedule",
    // },
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
      to: "/team/timers",
      exact: false,
      title: "Team",
    },
    {
      to: "/expenses",
      exact: false,
      title: "Expenses",
    },
    {
      to: "/invoices",
      exact: false,
      title: "Invoices",
    },
  ];

  return (
    <div>
      {links.map(({ to, exact, title }) => (
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
        >
          {title}
        </NavLink>
      ))}
    </div>
  );
};

export default Navlinks;
