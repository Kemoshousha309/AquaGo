import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Feed from "./components/calculations/feed/feed";
import OxygenCalc from "./components/calculations/oxygen/oxygen";
import Footer from "./layout/footer/footer";
import Header from "./layout/header/header";
import AboutPage from "./pages/aboutPage/aboutPage";
import CalculationsHomePage from "./pages/calculationsHomePage/calculationsHomePage";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="calculations" element={<CalculationsHomePage />} />
        <Route path="/dissolved-oxygen" element={<OxygenCalc />} />
        <Route path="/feed-intake" element={<Feed />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
