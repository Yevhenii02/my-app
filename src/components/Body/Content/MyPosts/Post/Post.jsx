import React from 'react';
import styles from './Post.module.css';

function Post(props) {
	return (
		<div className={styles.item}>
			<div className={styles.cont}>
				<div className={styles.avatar}>
					<img src={props.src} alt="" />
				</div>
				<div className="text">
					<p>
						{props.text}
					</p>
				</div>
			</div>
			<div className="likes">
				Likes: <span>{props.likesCounter}</span>
			</div>
		</div>
	)
}
export default Post;