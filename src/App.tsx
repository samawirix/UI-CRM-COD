/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { CallCenter } from "./pages/CallCenter";
import { Leads } from "./pages/Leads";
import { Customers } from "./pages/Customers";
import { Orders } from "./pages/Orders";
import { Delivery } from "./pages/Delivery";
import { Products } from "./pages/Products";
import { Analytics } from "./pages/Analytics";
import { Financial } from "./pages/Financial";
import { Marketing } from "./pages/Marketing";
import { Users } from "./pages/Users";
import { Payouts } from "./pages/Payouts";
import { Settings } from "./pages/Settings";
import { Login } from "./pages/Login";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="call-center" element={<CallCenter />} />
          <Route path="leads" element={<Leads />} />
          <Route path="customers" element={<Customers />} />
          <Route path="orders" element={<Orders />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="products" element={<Products />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="finance" element={<Financial />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="users" element={<Users />} />
          <Route path="payouts" element={<Payouts />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}
