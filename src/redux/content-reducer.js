const ADD_POST = 'ADD-POST';
const SET_NEW_POST_TEXT = 'SET-NEW-POST-TEXT';

const contentReducer = (state, action) => {

	switch (action.type) {
		case SET_NEW_POST_TEXT:
			state.setNewPostText(action.message);
			return state;
		case ADD_POST:
			let newPost = {
				id: 5,
				text: state.getNewPostText(),
				likesCounter: 0,
			};
			state.postsData.push(newPost);
			state.setNewPostText('');
			return state;
		default:
			return state;
	}
}

//POSTS
export const setNewPostTextActionCreator = (message) => {
	return (
		{
			type: SET_NEW_POST_TEXT,
			message: message,
		}
	)
}

export const addPostActionCreator = () => {
	return (
		{
			type: ADD_POST,
		}
	)
}

export default contentReducer;