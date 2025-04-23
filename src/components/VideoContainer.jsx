import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/Constants";
import VideoCard from "./VideoCard";
import { Link } from 'react-router-dom';

const VideoContainer = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		getVidoes();
	}, []);

	const getVidoes = async () => {
		const data = await fetch(YOUTUBE_VIDEOS_API);
		const json = await data.json();
		setVideos(json.items);
	};

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{videos?.map((item) => (
				<Link to={"/watch/" + item.id} key={item.id}>
					<VideoCard info={item} />
				</Link>
			))}
		</div>
	);
};

export default VideoContainer;
