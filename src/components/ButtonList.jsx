import React from "react";
import Button from "./Button";

const ButtonList = () => {
	const categories = [
		"All",
		"Movies",
		"Comedy",
		"Dancing",
		"Rapping",
		"Singing",
		"Sport",
		"Gaming",
		"Fashion",
	];

	return (
		<div className="flex overflow-x-auto gap-3 no-scrollbar">
			{categories.map((name, idx) => (
				<Button key={idx} name={name} />
			))}
		</div>
	);
};

export default ButtonList;
