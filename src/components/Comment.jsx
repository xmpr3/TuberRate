import React from "react";

const Comments = ({ info }) => {
	return (
		<div className="flex items-start gap-4 p-2 border-b border-gray-200">
			<img
				src={info?.authorProfileImageUrl}
				alt="profile"
				className="w-10 h-10 rounded-full object-cover"
			/>
			<div>
				<h4 className="text-sm font-semibold">{info?.authorDisplayName}</h4>
				<p className="text-sm text-gray-700">{info?.textOriginal}</p>
			</div>
		</div>
	);
};

export default Comments;
