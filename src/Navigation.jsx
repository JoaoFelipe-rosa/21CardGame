import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Pages/Home';
import Gaming from './Components/Pages/Gaming';

export default function Nav() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gaming" element={<Gaming />} />
      </Routes>
    </Router>
  );
}
