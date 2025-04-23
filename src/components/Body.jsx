import React from 'react';
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const Body = () => {
	return (
		<div className="flex flex-col px-4 space-y-4">
			<ButtonList />
			<VideoContainer />
		</div>
	);
};

export default Body;
