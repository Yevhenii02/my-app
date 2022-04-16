import React from 'react';
import s from './Content.module.css';
import MyPosts from './MyPosts/MyPosts';

function Content(props) {

	return (
		<div div className={s.content} >
			<div className={s.contentPhoto}>
				<img src="https://iso.500px.com/wp-content/uploads/2019/07/stock-photo-maderas-312058103.jpg" />
			</div>
			<div className={s.content__person}>
				<div className={s.content__ava}>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfHiaJaqzXDhv-mVG8J1M_UK-6PS8sdtZ4g&usqp=CAU" />
				</div>
				<div className={s.content__data}>
					<div className={s.content__name}>Yevhenii</div>
					<div className={s.content__surnamename}>Zaviriukha</div>
				</div>
			</div>
			<MyPosts content={props.content} dispatch={props.dispatch} />
		</div >
	)
}

export default Content;