import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Core from "./pages/Core";
import Security from "./pages/Security";
import Multilingual from "./pages/Multilingual";
import Payments from "./pages/Payments";
import Analytics from "./pages/Analytics";
import AI from "./pages/AI";
import WhatsApp from "./pages/WhatsApp";
import MobileAPI from "./pages/MobileAPI";
import Contacts from "./pages/Contacts";
import HR from "./pages/HR";

function App() {
  return (
    <div className="p-6">
      <nav className="mb-4 flex gap-4">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <li><Link to="/core">Core</Link></li>
          <li><Link to="/security">Security</Link></li>
          <li><Link to="/multilingual">Multilingual</Link></li>
          <li><Link to="/payments">Payments</Link></li>
          <li><Link to="/analytics">Analytics</Link></li>
          <li><Link to="/ai">AI</Link></li>
          <li><Link to="/whatsapp">WhatsApp</Link></li>
          <li><Link to="/mobile">Mobile API</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
          <li><Link to="/hr">HR</Link></li>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Core />} />
          <Route path="/core" element={<Core />} />
          <Route path="/security" element={<Security />} />
          <Route path="/multilingual" element={<Multilingual />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/whatsapp" element={<WhatsApp />} />
          <Route path="/mobile" element={<MobileAPI />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/hr" element={<HR />} />
      </Routes>
    </div>
  );
}

export default App;
