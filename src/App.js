import React from 'react';
import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';

function App(props) {
	return (
		<div className='app-wrapper'>
			<Header />
			<Body body={props.state.body} dispatch={props.dispatch} />
		</div>
	);
}

export default App;
