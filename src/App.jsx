import ArticlesPage from "./pages/ArticlesPage.jsx";
import NavbarSgds from "./sgdsComponents/Navbar.jsx";
import FooterSgds from "./sgdsComponents/Footer.jsx";
import "@govtechsg/sgds/css/sgds.css";
import "./App.css";

function App() {
  return (
    <>
      <NavbarSgds />
      <ArticlesPage />
      <FooterSgds />
    </>
  );
}

export default App;
