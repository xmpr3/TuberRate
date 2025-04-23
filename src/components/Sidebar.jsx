import React from "react";

const Sidebar = () => {
	return (
		<div className='space-y-2 p-3 shadow-lg rounded'>
			<div>
				<ul className='text-[18px] font-bold'>
					<li>Home</li>
					<li>Shorts</li>
					<li>Subscriptions</li>
				</ul>
			</div>
			<div>
				<h2 className='text-[18px] font-bold'>You</h2>
				<ul className='ml-3'>
					<li>History</li>
					<li>Playlists</li>
					<li>Your videos</li>
					<li>Your courses</li>
					<li>Watch Later</li>
					<li>Liked videos</li>
				</ul>
			</div>

			<div className='text-[18px] font-bold'>Subscriptions</div>

			<div>
				<h2 className='text-[18px] font-bold'>Explore</h2>
				<ul className='ml-3'>
					<li>Trending</li>
					<li>Shopping</li>
					<li>Music</li>
					<li>Films</li>
					<li>Live</li>
					<li>Gaming</li>
					<li>News</li>
					<li>Sport</li>
					<li>Courses</li>
					<li>Fashion & beauty</li>
					<li>Podcasts</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
