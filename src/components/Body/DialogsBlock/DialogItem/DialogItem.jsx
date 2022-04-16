import React from 'react';
import styles from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
	return (
		<li className={styles.dialog__li}>
			<NavLink to={'/dialogs/' + props.id} className={styles.dialog__link}>{props.name}</NavLink>
		</li >
	)
}

export default DialogItem;
