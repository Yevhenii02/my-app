import contentReducer from './content-reducer';
import dialogReducer from './dialog-reducer';
import navReducer from './nav-reducer';

let store = {
	_state: {
		nav: {},
		content: {
			postsData: [
				{
					id: 11,
					src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0KBxUvCY8hcY-tKjrvRfO5xFdE7eMWfFMDQ&usqp=CAU",
					text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, libero. Ex alias nostrum cumque animi asperiores doloribus! Qui, at? Veniam magni suscipit voluptates aspernatur deleniti beatae perferendis tempore, unde nemo!",
					likesCounter: 3,
				},
				{
					id: 12,
					src: "data:image/jpeg;base64,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",
					text: "Lorem ipsum dolor, siiet, libero. Exue animi asporibus gni suptates a deleniti be perferendis tempoe nemo!",
					likesCounter: 2,
				},
				{
					id: 13,
					src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0KBxUvCY8hcY-tKjrvRfO5xFdE7eMWfFMDQ&usqp=CAU",
					text: "TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT",
					likesCounter: 3777,
				},
				{
					id: 14,
					src: "#",
					text: "lorem",
					likesCounter: 0,
				},
			],
			_newPostText: '',
			getNewPostText() {
				return this._newPostText;
			},
			setNewPostText(text) {
				this._newPostText = text;
			}
		},
		dialogsBlock: {
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
		},
		news: {
			word: 'test'
		},
		music: {},
		settings: {},

	},
	_renderEntireTree() { },

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._renderEntireTree = observer;
	},

	dispatch(action) {
		this.getState().body.content = contentReducer(this.getState().body.content, action);
		this.getState().body.dialogsBlock = dialogReducer(this.getState().body.dialogsBlock, action);
		this.getState().body.nav = navReducer(this.getState().body.nav, action);

		this._renderEntireTree(this.getState());
	}
}

export default store;
window.store = store;
