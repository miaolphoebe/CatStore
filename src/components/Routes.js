import Home from "../pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customer from "./Customer";
import Dashboard from "./Dashboard/Dashboard";
import AppBar from "./AppBar/AppBar";
import ProductSales from "./ProductSales";
import Inventory from "./Inventory";

const AppRoutes = () => {
  return (
    <Router>
      <div>
        <nav>
          <AppBar />
        </nav>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Dashboard" element={<Dashboard />} />
            <Route exact path="/Customers" element={<Customer />} />
            <Route exact path="/Sales" element={<ProductSales />} />
            <Route exact path="/StoreManagement" element={<Inventory />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default AppRoutes;
