import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/noPage/NoPage";
import ScrollTop from "./components/scrollTop/ScrollTop";
import ContactoFormulario from "./pages/registration/Signup";
import TrackingForm from "./pages/registration/Login";
import Login from "./pages/registration/Admin";
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/administrativos" element={<Login />} />
          <Route path="/cotizacion" element={<ContactoFormulario />} />
          <Route path="/web-tracking" element={<TrackingForm />} />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  );
};

export default App;
