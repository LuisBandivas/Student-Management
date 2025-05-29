import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Store/Store";

import { MainPage } from "./pages";
// Authentication Pages
import { AuthPage, Login, Signup } from "./pages/Authentication";
//Teacher Pages
import {
  Dashboard,
  Students,
  MySubjects,
  Schedule,
  ViewSubject,
} from "./pages/Teacher";

function App() {
  const AppRoute = () => {
    return (
      <Routes>
        {/* Authentication Routes */}
        <Route path="/auth" element={<AuthPage />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<Signup />}></Route>
        </Route>

        {/* Teacher Routes */}
        <Route path="/" element={<MainPage />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="mysubjects" element={<MySubjects />} />
          <Route path="mysubjects/:subjectId" element={<ViewSubject />} />
          <Route path="students" element={<Students />} />
          <Route path="schedule" element={<Schedule />} />
        </Route>
      </Routes>
    );
  };

  return (
    <div className="text-f-dark font-Poppins">
      <Provider store={Store}>
        <AppRoute />
      </Provider>
    </div>
  );
}

export default App;
