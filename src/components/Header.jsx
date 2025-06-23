import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import SearchSuggestion from "./SearchSuggestion";
import { setQuery } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Header = () => {
	const [query, setQuery] = useState("");
	const [searchSuggestion, setsearchSuggestion] = useState(null);
	const dispatch = useDispatch();
	const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	};

	const handleInput = (e) => {
		setQuery(e.target.value);
	};

	useEffect(() => {
		if (!query) return;

		const timer = setTimeout(() => {
			getSearchSuggestion();
		}, 200);

		return () => clearTimeout(timer);
	}, [query]);

	const getSearchSuggestion = async () => {
		const targetURL =
			"https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
			query;
		const proxyURL =
			"https://api.allorigins.win/get?url=" +
			encodeURIComponent(targetURL);

		const res = await fetch(proxyURL);
		const json = await res.json();
		const suggestions = JSON.parse(json.contents);
		setsearchSuggestion(suggestions?.[1]);
	};

	// console.log(searchSuggestion);

	return (
		<div className="relative ">
			<header className="flex items-center justify-between px-4 py-2 bg-white shadow-md fixed w-full z-50">
				{/* Left: Menu + Logo */}
				<div className="flex items-center gap-4 min-w-[150px]">
					<button
						onClick={toggleMenuHandler}
						className="text-2xl p-1 hover:bg-gray-200 rounded-full"
					>
						☰
					</button>
					<img
						src="/YoutubeIcon.jpg"
						alt="YouTube"
						className="w-24 h-auto object-contain"
					/>
				</div>

				{/* Center: Search */}
				<div className="relative flex flex-grow justify-center max-w-[600px] px-4 items-center">
					<div className="flex w-full">
						<input
							type="text"
							placeholder="Search"
							className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none text-sm"
							onChange={handleInput}
						/>
						<Link to={"/search/" + query} className="border border-l-0 border-gray-300 px-3 rounded-r-full">	
						
							<img
								src="/SearchIcon.jpg"
								alt="Search"
								className="w-5 h-5"
								onClick={() => {
								dispatch(setQuery(query));
							}}
							/>
						
						</Link>
						{query && (
							<div className="absolute top-full left-0 bg-white w-full px-3 rounded-lg shadow-lg z-50 min-w-[250px]">
								<SearchSuggestion info={searchSuggestion} />
							</div>
						)}
					</div>
				</div>

				{/* Right: Profile */}
				<div className="flex items-center min-w-[60px] justify-end">
					<img
						src="/Profile.jpg"
						alt="Profile"
						className="w-8 h-8 rounded-full object-cover cursor-pointer"
					/>
				</div>
			</header>

			{/* Sidebar */}
			<div
				className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transition-transform duration-300 z-40 mt-14 ${
					isMenuOpen ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<Sidebar />
			</div>
		</div>
	);
};

export default Header;
