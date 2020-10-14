import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import * as ROUTES from './constants/routes';

import Buscador from './components/buscador';
import LandingPage from './screens/landing';
import BusquedaPage from './screens/busqueda';
import ProductoPage from './screens/producto';

function App() {
	return (
		<Router>
			<ScrollToTop>
				<Buscador />
				<Route exact path={ROUTES.LANDING} component={LandingPage} />
				<Route path={ROUTES.BUSQUEDA} component={BusquedaPage} />
				<Route path={ROUTES.PRODUCTO} component={ProductoPage} />
			</ScrollToTop>
    	</Router>
	);
}

export default App;
