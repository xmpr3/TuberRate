import React from 'react';

const VideoCard = ({ info }) => {
	const { thumbnails, title, channelTitle } = info?.snippet || {};
	const views = info?.statistics?.viewCount;

	return (
		<div className="w-full cursor-pointer">
			<img
				src={thumbnails?.medium?.url}
				alt="Thumbnail"
				className="w-full h-auto rounded-xl object-cover"
			/>
			<div className="mt-2">
				<h3 className="text-sm font-semibold line-clamp-2">
					{title}
				</h3>
				<h5 className="text-xs text-gray-600 mt-1">{channelTitle}</h5>
				<h5 className="text-xs text-gray-500">{Number(views).toLocaleString()} views</h5>
			</div>
		</div>
	);
};

export default VideoCard;
