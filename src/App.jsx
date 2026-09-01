import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import AssignedTasks from "./pages/AssignedTasks";
import TaskDetails from "./pages/TaskDetails";
import History from "./pages/History";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* =====================================================
            LOGIN PAGE - FIRST PAGE
            ===================================================== */}

        <Route
          path="/"
          element={<Login />}
        />


        {/* =====================================================
            WELCOME PAGE
            ===================================================== */}

        <Route
          path="/welcome"
          element={<Welcome />}
        />


        {/* =====================================================
            DASHBOARD
            ===================================================== */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />


        {/* =====================================================
            ASSIGNED TASKS
            ===================================================== */}

        <Route
          path="/assigned-tasks"
          element={<AssignedTasks />}
        />


        {/* =====================================================
            TASK DETAILS
            ===================================================== */}

        <Route
          path="/task-details"
          element={<TaskDetails />}
        />


        {/* =====================================================
            HISTORY
            ===================================================== */}

        <Route
          path="/history"
          element={<History />}
        />


        {/* =====================================================
            PROFILE
            ===================================================== */}

        <Route
          path="/profile"
          element={<Profile />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;