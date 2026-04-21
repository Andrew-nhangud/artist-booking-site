import "./styles/global.css";
import { Landing } from "./pages/Landing/Landing.jsx";
import { Browser } from "./pages/Browser/Browser.jsx";
import { NotFound } from "./pages/NotFound/NotFound.jsx";

function App() {
  return (
    <div>
      <Landing />
      <Browser />
      <NotFound />
    </div>
  );
}

export default App;
