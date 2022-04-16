import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {

	let MyPostElements = props.content.postsData
		.map(post => <Post src={post.src} text={post.text} likesCounter={post.likesCounter} />);

	let newPostElement = React.createRef();

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.dispatch({ type: 'SET-NEW-POST-TEXT', message: text })
	}

	let addPost = () => {
		props.dispatch({ type: 'ADD-POST' })
	}



	return (
		<div>
			<div className={styles.myPosts}>
				MyPosts
			</div>
			<textarea onChange={onPostChange} ref={newPostElement} value={props.content.getNewPostText()} />
			<button onClick={addPost}>Add post</button>
			{MyPostElements}
		</div>
	)
}
export default MyPosts;