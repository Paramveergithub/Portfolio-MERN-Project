import "./App.css";
import Layout from "./components/Layout/Layout.js";
import About from "./pages/About/About.js";
import Projects from "./pages/Projects/Projects.js";
import TechStack from "./pages/Techstack/TechStack.js";
import Education from "./pages/Education/education.js";
import Contact from "./pages/Contact/Contact.js";
import ScrollToTop from "react-scroll-to-top";

import { useTheme } from "./context/ThemeContext.js";
import Tada from "react-reveal/Tada";
import MobileNav from "./components/MobileNav/MobileNav.js";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [theme] = useTheme();

  
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container-fluid">
          <About />
          <Education />
          <TechStack />
          <Projects />
          <Contact />
        </div>
        <div className="footer pb-2 mt-5">
          <Tada>
            <h4 className="text-center">Made by ❤️ Paramveer &copy; 2024</h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        height="46"
        width="36"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "25px" }}
      />
    </>
  );
}

export default App;
