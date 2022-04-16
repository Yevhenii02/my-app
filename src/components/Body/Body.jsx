import React from 'react';
import './Body.css';
import Nav from './Nav/Nav';
import Content from './Content/Content';
import DialogsBlock from './DialogsBlock/DialogsBlock';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import { Route, Routes } from 'react-router-dom';

function Body(props) {

	return (
		<div className='body'>
			<Nav />
			<div className="bodyContent">
				<Routes>
					<Route path='/profile/*' element={<Content content={props.body.content} dispatch={props.dispatch} />} />
					<Route path='/dialogs/*' element={<DialogsBlock dialogsBlock={props.body.dialogsBlock} dispatch={props.dispatch} />} />
					<Route path='/news/*' element={<News />} />
					<Route path='/music/*' element={<Music />} />
					<Route path='/settings/*' element={<Settings />} />
				</Routes>
			</div>
		</div>
	)
}

export default Body;