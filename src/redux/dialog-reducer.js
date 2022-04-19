const ADD_MESSAGE = 'ADD-MESSAGE';
const SET_NEW_MESSAGE_TEXT = 'SET-NEW-MESSAGE-TEXT';

const dialogReducer = (state, action) => {

	switch (action.type) {
		case SET_NEW_MESSAGE_TEXT:
			state.setNewMessageText(action.message);
			return state;
		case ADD_MESSAGE:
			let newMessage = {
				id: 4,
				message: state.getNewMessageText(),
			};
			state.conversationData.push(newMessage);
			state.setNewMessageText('');
			return state;
		default:
			return state;
	}
}

//MESSAGE
export const setNewMessageTextActionCreator = (message) => {
	return (
		{
			type: SET_NEW_MESSAGE_TEXT,
			message: message,
		}
	)
}

export const addMessageActionCreator = () => {
	return (
		{
			type: ADD_MESSAGE,
		}
	)
}

export default dialogReducer;