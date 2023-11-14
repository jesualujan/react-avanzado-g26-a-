import Header from "@/Components/Header";
import { BrowserRouter } from "react-router-dom";
import RoutesIndex from "@/Routes/RoutesIndex";
import { AuthProvider } from "@/Context/AuthContext";
import "./App.css";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <RoutesIndex />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
