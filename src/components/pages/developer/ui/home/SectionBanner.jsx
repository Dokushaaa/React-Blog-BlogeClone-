import React from "react";
import { Link } from "react-router-dom";

const SectionBanner = ({
	title = "Trending",
	hasLink = false,
	link = "#",
	className = "",
}) => {
	return (
		<>
			<div className={` ${className} flex justify-between items-center`}>
				<h3 className='text-2xl border-l-4 pl-3 border-red-500'>{title}</h3>
				{hasLink && (
					<Link
						to='#'
						className='border rounded-md bg-transparent border-gray-500 px-2 py-1'>
						View All
					</Link>
				)}
			</div>
		</>
	);
};

export default SectionBanner;
