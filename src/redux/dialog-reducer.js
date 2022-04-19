const ADD_MESSAGE = 'ADD-MESSAGE';
const SET_NEW_MESSAGE_TEXT = 'SET-NEW-MESSAGE-TEXT';

let initialState = {
	dialogsData: [
		{ id: 1, name: 'Andrew' },
		{ id: 2, name: 'Sasha' },
		{ id: 3, name: 'Dima' },
		{ id: 4, name: 'Katia' },
		{ id: 5, name: 'Valiya' },
	],
	conversationData: [
		{ id: 1, message: "Hi" },
		{ id: 2, message: "How are you" },
		{ id: 3, message: "Yo" },
	],
	_newMessageText: '',
	getNewMessageText() {
		return this._newMessageText;
	},
	setNewMessageText(text) {
		this._newMessageText = text;
	}
}

const dialogReducer = (state = initialState, action) => {

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