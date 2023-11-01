import Message from './Message.jsx';
import NavbarSgds from './sgdsComponents/Navbar.jsx';
import FooterSgds from './sgdsComponents/Footer.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import '@govtechsg/sgds/css/sgds.css';
import './App.css';

function App() {
  return (
    <>
      <NavbarSgds />
      <ArticlePage />
      <FooterSgds />
    </>
  );
}

export default App;
