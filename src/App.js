import Header from "./components/Header";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import NavProvider from "./context/NavContext";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <NavProvider>
        <Header />
        <Home />
        <Work />
        <Contact />
        <Footer />
      </NavProvider>
    </div>
  );
};

export default App;
