import {
  User,
  Mail,
  Phone,
  Briefcase,
  Building2,
  MapPin,
  CheckCircle2,
} from "lucide-react";

import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import BottomNav from "../components/BottomNav";
import PageTransition from "../components/PageTransition";

import "../styles/profile.css";

function Profile() {

  /* =========================================
     WORKER POSE
     thumbs-up-02 -> thumbs-up-01
     ONLY ONCE
  ========================================= */

  const [workerPose, setWorkerPose] = useState(2);


  /* =========================================
     SUMMARY CARD VALUES
  ========================================= */

  const [assignedCount, setAssignedCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [completionRate, setCompletionRate] = useState(0);


  /* =========================================
     PAGE ANIMATIONS
  ========================================= */

  useEffect(() => {

    /* -----------------------------------------
       Worker pose
       ----------------------------------------- */

    const poseTimer = setTimeout(() => {
      setWorkerPose(1);
    }, 900);


    /* -----------------------------------------
       Assigned tasks: 0 -> 3
       ----------------------------------------- */

    let assigned = 0;

    const assignedTimer = setInterval(() => {

      assigned += 1;

      if (assigned >= 3) {
        assigned = 3;
        clearInterval(assignedTimer);
      }

      setAssignedCount(assigned);

    }, 180);


    /* -----------------------------------------
       Completed tasks: 0 -> 3
       ----------------------------------------- */

    let completed = 0;

    const completedTimer = setInterval(() => {

      completed += 1;

      if (completed >= 3) {
        completed = 3;
        clearInterval(completedTimer);
      }

      setCompletedCount(completed);

    }, 220);


    /* -----------------------------------------
       Completion rate: 0 -> 100
       ----------------------------------------- */

    let percentage = 0;

    const percentageTimer = setInterval(() => {

      percentage += 5;

      if (percentage >= 100) {
        percentage = 100;
        clearInterval(percentageTimer);
      }

      setCompletionRate(percentage);

    }, 25);


    /* -----------------------------------------
       CLEANUP
       ----------------------------------------- */

    return () => {

      clearTimeout(poseTimer);

      clearInterval(assignedTimer);

      clearInterval(completedTimer);

      clearInterval(percentageTimer);

    };

  }, []);


  return (
    <PageTransition>

      <Sidebar />

      <div className="app-shell">

        <main className="page-content profile-page">

          {/* =========================================
              HEADER
          ========================================= */}

          <div className="profile-header">

            

            <h1>
              My Profile
            </h1>

            <p>
              Worker information and work summary.
            </p>

          </div>


          {/* =========================================
              MAIN PROFILE CARD
          ========================================= */}

          <section className="profile-main-card">


            {/* =====================================
                WORKER SECTION
            ===================================== */}

            <div className="profile-image-section">

              <div className="profile-worker-animation">

                <img
                  key={workerPose}
                  src={`/worker-poses/thumbs-up-0${workerPose}.png`}
                  alt="Municipal Worker"
                  className="profile-worker-image"
                />

              </div>


              <h2>
                Arjun Kumar
              </h2>


              <span className="profile-role">
                Municipal Worker
              </span>


              <div className="profile-active-status">

                <CheckCircle2 size={15} />

                Active Worker

              </div>

            </div>


            {/* =====================================
                WORKER INFORMATION
            ===================================== */}

            <div className="profile-information">

              <h3>
                Worker Information
              </h3>


              {/* NAME */}

              <div className="profile-info-item">

                <div className="profile-info-icon">
                  <User size={19} />
                </div>

                <div>

                  <span>
                    Full Name
                  </span>

                  <strong>
                    Arjun Kumar
                  </strong>

                </div>

              </div>


              {/* WORKER ID */}

              <div className="profile-info-item">

                <div className="profile-info-icon">
                  <Briefcase size={19} />
                </div>

                <div>

                  <span>
                    Worker ID
                  </span>

                  <strong>
                    CW-1025
                  </strong>

                </div>

              </div>


              {/* DEPARTMENT */}

              <div className="profile-info-item">

                <div className="profile-info-icon">
                  <Building2 size={19} />
                </div>

                <div>

                  <span>
                    Department
                  </span>

                  <strong>
                    Municipal Services
                  </strong>

                </div>

              </div>


              {/* EMAIL */}

              <div className="profile-info-item">

                <div className="profile-info-icon">
                  <Mail size={19} />
                </div>

                <div>

                  <span>
                    Email
                  </span>

                  <strong>
                    worker@civicconnect.com
                  </strong>

                </div>

              </div>


              {/* PHONE */}

              <div className="profile-info-item">

                <div className="profile-info-icon">
                  <Phone size={19} />
                </div>

                <div>

                  <span>
                    Phone
                  </span>

                  <strong>
                    +91 98765 43210
                  </strong>

                </div>

              </div>


              {/* LOCATION */}

              <div className="profile-info-item">

                <div className="profile-info-icon">
                  <MapPin size={19} />
                </div>

                <div>

                  <span>
                    Assigned Area
                  </span>

                  <strong>
                    Visakhapatnam
                  </strong>

                </div>

              </div>

            </div>

          </section>


          {/* =========================================
              WORK SUMMARY
          ========================================= */}

          <section className="profile-summary">


            {/* =====================================
                ASSIGNED TASKS
            ===================================== */}

            <div className="profile-summary-card assigned-card">

              <strong>
                {assignedCount}
              </strong>

              <span>
                Assigned Tasks
              </span>

            </div>


            {/* =====================================
                COMPLETED TASKS
            ===================================== */}

            <div className="profile-summary-card completed-card">

              <strong>
                {completedCount}
              </strong>

              <span>
                Completed Tasks
              </span>

            </div>


            {/* =====================================
                COMPLETION RATE
            ===================================== */}

            <div className="profile-summary-card progress-card">

              <strong>
                {completionRate}%
              </strong>

              <span>
                Completion Rate
              </span>

            </div>

          </section>

        </main>


        {/* =========================================
            BOTTOM NAVIGATION
        ========================================= */}

        <BottomNav />

      </div>

    </PageTransition>
  );
}

export default Profile;