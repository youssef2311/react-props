import "./App.css";
import Navbarr from "./Profile/nav/Navbarr";
import { team } from "./Data";
import Dashboard from "./Dashboard";
import Footer from "./Profile/footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbarr />
      <Dashboard team={team} />
      <Footer />
    </div>
  );
}

export default App;
