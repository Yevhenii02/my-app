import React from 'react';
import styles from './Conversation.module.css';

const Conversation = (props) => {
	return (
		<div className={styles.dialogs__message}>{props.message}</div>
	)
}

export default Conversation;