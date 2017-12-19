import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
	<App
	sightingsUrl='http://localhost:8081/sightings'
	speciesUrl='http://localhost:8081/species'
	pollInterval={2000}/>,
 	document.getElementById('root')
 	);
