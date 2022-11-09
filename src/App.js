import { Home, SignUp, LogIn, MyMarket } from "./components/pages/index";
import "./App.css";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Header from "./components/features/Header/Header";
import { ShoppingCartProvider } from "./contexts/useShoppingCatContext";
import Footer from "./components/features/Footer/Footer";
import { UserAuthContextProvider, useUserAuth } from "./contexts/UserAuthContext";
import ProtectedRoute from "./components/features/ProtectedRoute/ProtectedRoute";

function App() {
  const {user} = useUserAuth();

  return (
    <>
      <ShoppingCartProvider>
     {user?<Header />:""}
          
          <Container className="mb-3">
            <Routes>
              <Route
                path="/Home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/MyMarket" element={<MyMarket />} />
              <Route path="/" element={<LogIn />} />
              <Route path="/SignUp" element={<SignUp />} />
            </Routes>
          </Container>
  
        <Footer />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
