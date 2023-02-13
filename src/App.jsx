import { useEffect, useState } from "react";

import Load from "./components/load/Load";
import Blog from "./pages/blog/Blog";
import Divulgation from "./pages/divulgation/Divulgation";
import Exemples from "./pages/exemples/Exemples";
import Footer from "./pages/footer/Footer";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Statistics from "./pages/statistics/Statistics";
import Team from "./pages/team/Team";

import "./styles/index.css";

function App() {
  const [activeLoad, setActiveLoad] = useState(true);
  useEffect(() => {
    setActiveLoad(false);
  }, []);

  return (
    <div className="App">
      <Load isActive={activeLoad} />
      <Home />
      <Services />
      <Exemples />
      <Statistics />
      <Team />
      <Blog />
      <Divulgation />
      <Footer />
    </div>
  );
}

export default App;
