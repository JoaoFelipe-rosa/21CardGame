import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../src/Components/Pages/Home.jsx';
import Gaming from '../src/Components/Pages/Gaming.jsx';

export default function Nav() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/Gaming' element={<Gaming />} />
			</Routes>
		</Router>
	);
}