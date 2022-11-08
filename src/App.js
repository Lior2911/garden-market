import { Home, SignUp, LogIn, MyMarket } from "./components/pages/index";
import "./App.css";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Header from "./components/features/Header/Header";
import { ShoppingCartProvider } from "./contexts/useShoppingCatContext";
import Footer from './components/features/Footer/Footer';
import {UserAuthContextProvider} from './contexts/UserAuthContext'

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Header />
        <Container className="mb-3">
      <UserAuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/MyMarket" element={<MyMarket />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/LogIn" element={<LogIn />} />
          </Routes>
          </UserAuthContextProvider>
        </Container>
        <Footer/>

      </ShoppingCartProvider>
    </>
  );
}

export default App;
