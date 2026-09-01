import { useEffect, useState } from "react";
import {
  Bell,
  ArrowRight,
  ClipboardList,
  CheckCircle2,
  Clock3,
  MapPin,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Sidebar from "../components/Sidebar";
import BottomNav from "../components/BottomNav";
import WorkerReadyAnimation from "../components/WorkerReadyAnimation";
import PageTransition from "../components/PageTransition";

import "../styles/dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 17) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <PageTransition>
      <Sidebar />

      <div className="app-shell">
        <main className="page-content dashboard-page">

          {/* =====================================================
              HEADER
          ===================================================== */}

          <motion.header
            className="dashboard-header"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div>
              <p className="dashboard-eyebrow">
                WORKER DASHBOARD
              </p>

              <h1>
                {greeting}, Worker! <span>👋</span>
              </h1>

              <p className="dashboard-subtitle">
                Here's your work overview for today.
              </p>
            </div>

            <button
              className="notification-button"
              aria-label="Notifications"
            >
              <Bell size={20} />

              <span className="notification-dot"></span>
            </button>
          </motion.header>


          {/* =====================================================
              WORKER HERO
          ===================================================== */}

          <motion.section
            className="worker-hero"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.1,
            }}
          >

            <div className="hero-content">

              <div className="hero-badge">
                <span></span>
                Ready for work
              </div>

              <h2>
                Make your community
                <br />
                <strong>better every day.</strong>
              </h2>

              <p>
                Complete your assigned tasks and help
                keep your community clean, safe and
                connected.
              </p>

              <button
                className="primary-button gold-button"
                onClick={() => navigate("/assigned-tasks")}
              >
                View Assigned Tasks
                <ArrowRight size={17} />
              </button>

            </div>


            {/* Worker animation */}

            <div className="worker-container">
              <WorkerReadyAnimation />
            </div>

          </motion.section>


          {/* =====================================================
              STATISTICS
          ===================================================== */}

          <section className="stats-grid">

            {/* ASSIGNED */}

            <motion.div
              className="stat-card blue"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >

              <div className="stat-icon">
                <ClipboardList size={21} />
              </div>

              <div className="stat-info">

                <p>Assigned Tasks</p>

                <motion.strong
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.45,
                    duration: 0.5,
                    type: "spring",
                  }}
                >
                  12
                </motion.strong>

              </div>

            </motion.div>


            {/* COMPLETED */}

            <motion.div
              className="stat-card green"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >

              <div className="stat-icon">
                <CheckCircle2 size={21} />
              </div>

              <div className="stat-info">

                <p>Completed</p>

                <motion.strong
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.55,
                    duration: 0.5,
                    type: "spring",
                  }}
                >
                  8
                </motion.strong>

              </div>

            </motion.div>


            {/* PENDING */}

            <motion.div
              className="stat-card gold"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >

              <div className="stat-icon">
                <Clock3 size={21} />
              </div>

              <div className="stat-info">

                <p>Pending</p>

                <motion.strong
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.65,
                    duration: 0.5,
                    type: "spring",
                  }}
                >
                  4
                </motion.strong>

              </div>

            </motion.div>

          </section>


          {/* =====================================================
              DASHBOARD LOWER SECTION
          ===================================================== */}

          <section className="dashboard-grid">

            {/* =================================================
                PROGRESS
            ================================================= */}

            <motion.div
              className="progress-card"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >

              <div className="card-heading">

                <div>

                  <h3>
                    Today's Progress
                  </h3>

                  <p>
                    Keep going, you're doing great!
                  </p>

                </div>

                <CheckCircle2 size={19} />

              </div>


              <div className="progress-content">

                <div className="progress-ring">

                  <svg
                    viewBox="0 0 120 120"
                    aria-hidden="true"
                  >

                    <circle
                      className="progress-track"
                      cx="60"
                      cy="60"
                      r="50"
                    />

                    <motion.circle
                      className="progress-value"
                      cx="60"
                      cy="60"
                      r="50"
                      initial={{
                        strokeDashoffset: 314,
                      }}
                      animate={{
                        strokeDashoffset: 104,
                      }}
                      transition={{
                        duration: 1.2,
                        delay: 0.6,
                        ease: "easeOut",
                      }}
                    />

                  </svg>


                  <motion.span
                    className="progress-number"
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: 0.9,
                      duration: 0.5,
                      type: "spring",
                    }}
                  >
                    67%
                  </motion.span>

                </div>


                <div className="progress-text">

                  <strong>
                    8 of 12 tasks
                  </strong>

                  <p>
                    completed today
                  </p>

                  <span>
                    4 tasks remaining
                  </span>

                </div>

              </div>

            </motion.div>


            {/* =================================================
                NEXT TASK
            ================================================= */}

            <motion.div
              className="quick-card"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >

              <div className="quick-icon">
                <ClipboardList size={21} />
              </div>

              <div>

                <p className="quick-label">
                  NEXT TASK
                </p>

                <h3>
                  Road Damage
                </h3>

                <p>
                  Main Road
                </p>

              </div>

              <button
                className="quick-arrow"
                onClick={() => navigate("/assigned-tasks")}
                aria-label="View assigned tasks"
              >
                <ArrowRight size={17} />
              </button>

            </motion.div>

          </section>


          {/* =====================================================
              RECENT TASKS
          ===================================================== */}

          <section className="recent-section">

            <div className="section-header">

              <div>

                <h2 className="section-title">
                  Recent Tasks
                </h2>

                <p className="section-subtitle">
                  Your latest assigned work
                </p>

              </div>

              <button
                className="view-all"
                onClick={() => navigate("/assigned-tasks")}
              >
                View all
                <ArrowRight size={14} />
              </button>

            </div>


            <div className="recent-list">

              {/* ROAD DAMAGE */}

              <motion.div
                className="recent-task"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >

                <div className="task-icon">
                  <MapPin size={18} />
                </div>

                <div className="task-main">

                  <h3>
                    Road Damage
                  </h3>

                  <p>
                    <MapPin size={12} />
                    Main Road
                  </p>

                </div>

                <span className="task-status pending">
                  Pending
                </span>

                <ArrowRight
                  className="task-arrow"
                  size={16}
                />

              </motion.div>


              {/* GARBAGE */}

              <motion.div
                className="recent-task"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >

                <div className="task-icon">
                  <ClipboardList size={18} />
                </div>

                <div className="task-main">

                  <h3>
                    Garbage Collection
                  </h3>

                  <p>
                    <MapPin size={12} />
                    Gandhi Park
                  </p>

                </div>

                <span className="task-status progress">
                  Pending
                </span>

                <ArrowRight
                  className="task-arrow"
                  size={16}
                />

              </motion.div>


              {/* WATER */}

              <motion.div
                className="recent-task"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
              >

                <div className="task-icon">
                  <MapPin size={18} />
                </div>

                <div className="task-main">

                  <h3>
                    Water Leakage
                  </h3>

                  <p>
                    <MapPin size={12} />
                    Market Street
                  </p>

                </div>

                <span className="task-status pending">
                  Pending
                </span>

                <ArrowRight
                  className="task-arrow"
                  size={16}
                />

              </motion.div>

            </div>

          </section>

        </main>

        <BottomNav />

      </div>

    </PageTransition>
  );
}

export default Dashboard;