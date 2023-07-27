import "./App.css";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="bg-gray-600">
      <header className="">
        <LandingPage />
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
