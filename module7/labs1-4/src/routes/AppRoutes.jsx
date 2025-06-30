import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import BitcoinRatesPage from "../pages/BitcoinRatesPage";

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="bitcoin-rates" element={<BitcoinRatesPage />} />

      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}
export default AppRoutes;
