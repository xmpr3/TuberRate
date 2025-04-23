import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setQuery } from "../utils/searchSlice";

const SearchSuggestion = ({ info }) => {
	const dispatch = useDispatch();

	return (
		<div>
			{info?.length > 0 &&
				info.map((item, idx) => (
					<Link to={"/search/" + item} key={idx}>
						<div
							className="flex items-center gap-x-3 hover:bg-gray-100 px-3 py-2 rounded-lg cursor-pointer transition-colors"
							onClick={() => dispatch(setQuery(item))}
						>
							<img
								src="/SearchIcon.jpg"
								alt="SearchIcon"
								className="w-4 h-4"
							/>
							<h3 className="text-sm text-gray-800">{item}</h3>
						</div>
					</Link>
				))}
		</div>
	);
};

export default SearchSuggestion;
