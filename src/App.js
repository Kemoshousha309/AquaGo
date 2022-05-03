import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Feed from "./components/calculations/feed/feed";
import OxygenCalc from "./components/calculations/oxygen/oxygen";
import CalculationsHomePage from "./components/calculationsHomePage/calculationsHomePage";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="calculations" element={<CalculationsHomePage />} />
        <Route path="/dissolved-oxygen" element={<OxygenCalc />} />
        <Route path="/feed-intake" element={<Feed />} />
        <Route path="about" element={<h1>About Page</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
