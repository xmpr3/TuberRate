import React, { useState, useEffect } from "react";
import { SEARCH_RESULT_API, GOOGLE_API_KEY } from "../utils/Constants";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const SearchResult = () => {
	const [searchResultVid, setSearchResultVid] = useState(null);
	const query = useSelector((store) => store.search.query);

	useEffect(() => {
		if (query) getSearchResult();
	}, [query]);

	const getSearchResult = async () => {
		const data = await fetch(
			SEARCH_RESULT_API + query + "&key=" + GOOGLE_API_KEY,
		);
		const json = await data.json();
		setSearchResultVid(json?.items);
		console.log(json);
	};

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{searchResultVid?.map((item) => (
				<Link to={"/watch/" + item?.id?.videoId} key={item?.id?.videoId}>
					<VideoCard info={item} />
				</Link>
			))}
		</div>
	);
};

export default SearchResult;
