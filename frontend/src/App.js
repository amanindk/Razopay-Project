import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import PaymentSucces from "./PaymentSucces";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/paymentsuccess"
          element={<PaymentSucces />}
        />
      </Routes>
    </Router>
  );
}

export default App;
