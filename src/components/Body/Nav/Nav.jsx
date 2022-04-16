import React from 'react';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';

function Nav() {
	return (
		<nav className={s.nav}>
			<ul>
				<li className={s.item}><NavLink to="/profile" className={navData => navData.isActive ? s.active + ' ' + s.link : s.link}>Profile</NavLink></li>
				<li className={s.item}><NavLink to="/dialogs" className={navData => navData.isActive ? s.active + ' ' + s.link : s.link}>Message</NavLink></li>
				<li className={s.item}><NavLink to="/news" className={navData => navData.isActive ? s.active + ' ' + s.link : s.link}>News</NavLink></li>
				<li className={s.item}><NavLink to="/music" className={navData => navData.isActive ? s.active + ' ' + s.link : s.link}>Music</NavLink></li>
			</ul>
			<div className={s.navSettings}>
				<NavLink to="/settings">Settings</NavLink>
			</div>
		</nav >
	)
}
export default Nav;