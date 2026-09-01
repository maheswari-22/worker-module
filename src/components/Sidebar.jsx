import { NavLink, useNavigate } from "react-router-dom";

import {
  Home,
  ClipboardList,
  Clock3,
  UserRound,
  LogOut,
} from "lucide-react";

import "../styles/sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  /* =========================================
     LOGOUT
  ========================================= */

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (confirmLogout) {
      localStorage.removeItem("workerLoggedIn");
      sessionStorage.removeItem("workerLoggedIn");

      // Logout → Login page
      navigate("/");
    }
  };

  const links = [
    {
      name: "Home",
      path: "/dashboard",
      icon: Home,
    },
    {
      name: "Tasks",
      path: "/assigned-tasks",
      icon: ClipboardList,
    },
    {
      name: "History",
      path: "/history",
      icon: Clock3,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: UserRound,
    },
  ];

  return (
    <aside className="desktop-sidebar">

      {/* =====================================
          LOGO
      ===================================== */}

      <div className="sidebar-logo">
        <img
          src="/images/logo.png"
          alt="CivicConnect Logo"
          className="sidebar-logo-image"
        />
      </div>


      {/* =====================================
          NAVIGATION
      ===================================== */}

      <nav className="sidebar-navigation">

        <p className="sidebar-label">
          MAIN MENU
        </p>

        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              <Icon size={20} />

              <span>
                {link.name}
              </span>
            </NavLink>
          );
        })}

      </nav>


      {/* =====================================
          SIDEBAR BOTTOM
      ===================================== */}

      <div className="sidebar-bottom">

        {/* WORKER */}

        <div className="sidebar-worker">

          <div className="sidebar-worker-avatar">
            W
          </div>

          <div>
            <strong>
              Worker
            </strong>

            <span>
              Active
            </span>
          </div>

          <span className="sidebar-online"></span>

        </div>


        {/* LOGOUT */}

        <button
          type="button"
          className="sidebar-logout"
          onClick={handleLogout}
        >
          <LogOut size={18} />

          <span>
            Logout
          </span>
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;