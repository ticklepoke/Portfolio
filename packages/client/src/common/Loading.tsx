import React from 'react';
import './Loading.css';

export default function Loading() {
	return (
		<div className=" loading-screen position-fixed vw-100 vh-100" style={{ paddingTop: '30vh' }}>
			<div className="loader"></div>
		</div>
	);
}
