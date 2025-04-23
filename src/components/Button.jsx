import React from 'react';

const Button = ({ name }) => {
	return (
		<button className="bg-gray-200 hover:bg-gray-300 text-sm font-medium py-1 px-4 rounded-full whitespace-nowrap transition">
			{name}
		</button>
	);
};

export default Button;
