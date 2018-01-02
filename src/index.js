import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
	<App
	sightingsUrl='http://localhost:8081/sightings'
	speciesUrl='http://localhost:8081/species' />,
 	document.getElementById('root')
 	);
