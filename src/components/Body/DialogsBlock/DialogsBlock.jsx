import React from 'react';
import styles from './DialogsBlock.module.css';

import DialogItem from './DialogItem/DialogItem';
import Conversation from './Conversation/Conversation';

import { addMessageActionCreator, setNewMessageTextActionCreator } from '../../../redux/dialog-reducer';



const DialogsBlock = (props) => {

	let dialogsElements = props.dialogsBlock.dialogsData.map(obj => (<DialogItem id={obj.id} name={obj.name} />));
	let conversationElements = props.dialogsBlock.conversationData.map(mess => <Conversation message={mess.message} />);

	let onTextChange = (e) => {
		let text = e.target.value;
		props.dispatch(setNewMessageTextActionCreator(text));
	}

	let addMessage = () => {
		props.dispatch(addMessageActionCreator());
	}

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogs__row}>
				<div className={styles.dialogs__contacts}>
					<div className={styles.dialogs__name}>Dialogs</div>
					<ul className={styles.dialogs__list + " " + styles.dialog}>
						{dialogsElements}
					</ul>
				</div>
				<div className={styles.dialogs__conversation}>
					{conversationElements}
					<div className={styles.dialogs__sendMessage}>
						<textarea onChange={onTextChange} className={styles.dialogs__textarea} value={props.dialogsBlock.getNewMessageText()} />
						<button onClick={addMessage} className={styles.dialogs__button}>Send</button>
					</div>
				</div>

			</div>
		</div >
	);
}

export default DialogsBlock;
