import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { VIDEO_API, GOOGLE_API_KEY, COMMENTS_API } from "../utils/Constants";
import YouTube from "react-youtube";
import Comments from "./Comment";

const WatchPage = () => {
	const [vidInfo, setVidInfo] = useState(null);
	const [comments, setComments] = useState(null);
	const { vidId } = useParams();

	useEffect(() => {
		getSingleVideo();
		getComments();
	}, []);

	const getSingleVideo = async () => {
		try {
			const res = await fetch(`${VIDEO_API}${vidId}&key=${GOOGLE_API_KEY}`);
			const json = await res.json();
			setVidInfo(json?.items?.[0]);
		} catch (err) {
			console.error("Video fetch error:", err);
		}
	};

	const getComments = async () => {
		try {
			const res = await fetch(`${COMMENTS_API}${vidId}&key=${GOOGLE_API_KEY}`);
			const json = await res.json();
			setComments(json?.items);
		} catch (err) {
			console.error("Comments fetch error:", err);
		}
	};

	return (
		<div className="w-full px-4 md:px-8 pt-4 space-y-6">
			{/* YouTube Player */}
			<div className="aspect-video w-full rounded-lg overflow-hidden">
				<YouTube
					videoId={vidId}
					className="w-full h-full"
					opts={{
						width: "100%",
						height: "100%",
						playerVars: {
							autoplay: 1,
							controls: 1,
							rel: 0,
							modestbranding: 1,
						},
					}}
				/>
			</div>

			{/* Video Info */}
			<div className="space-y-2">
				<h2 className="text-xl font-semibold">{vidInfo?.snippet?.localized?.title}</h2>
				<div className="flex items-center gap-4 text-sm text-gray-600">
					<span>{vidInfo?.snippet?.channelTitle}</span>
					<span>•</span>
					<span>{Number(vidInfo?.statistics?.likeCount || 0).toLocaleString()} likes</span>
				</div>
			</div>

			{/* Comments */}
			<div className="space-y-4">
				<h3 className="text-lg font-medium">Comments</h3>
				{comments?.map((item, i) => (
					<Comments key={i} info={item?.snippet?.topLevelComment?.snippet} />
				))}
			</div>
		</div>
	);
};

export default WatchPage;
