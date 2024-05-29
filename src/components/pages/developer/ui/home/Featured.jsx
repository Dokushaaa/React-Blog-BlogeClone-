import React from "react";
import Card from "./Card";
import SectionBanner from "./SectionBanner";
import useQueryData from "../../../../custom-hook/useQueryData";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";
import { devBaseImgUrl } from "../../../../helpers/functions-general";
import SpinnerWindow from "../../../../partials/spinners/SpinnerWindow";

const Featured = () => {
	const [hasLink, setHasLink] = React.useState(false);
	const [isSearch, setIsSearch] = React.useState(false);
	const [keyword, setKeyword] = React.useState("");
	//  post counter
	const { isLoading, data: post } = useQueryData(
		isSearch ? "/v1/post/search" : "/v1/post", // endpoint
		isSearch ? "post" : "get", // method
		"post", //key
		// ["post", isSearch],
		{
			searchValue: keyword,
		}
	);
	// console.log(post);
	// filter function
	const getFeatured = () =>
		post?.data.filter((item) => item.post_category_id == 2);

	return (
		<>
			<div className='Featured py-10'>
				<div className='container'>
					<SectionBanner
						className='mb-10'
						title='Featured'
						hasLink={true}
						link='/Featured'
					/>
					<div className='grid gap-10 md:grid-cols-3'>
						{/* try dito */}
						{!isLoading &&
							getFeatured()
								.slice(0, 4)
								.map((item, key) => (
									<div
										key={key}
										className='shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)]  p-5 rounded-2xl'>
										<div className='overflow-hidden rounded-xl h-[250px] mb-5 -mt-10'>
											{/* <Link to={`/single/${item.post_title}?id=${item.post_aid}`}> */}
											<Link to={`/single?id=${item.post_aid}`}>
												<img
													src={`${devBaseImgUrl}/${item.post_image}`}
													alt=''
													className='w-full object-cover h-[300px] block   transition-transform hover:scale-110'
												/>
											</Link>
										</div>
										<small
											className={`hover:bg-accent bg-stone-600  px-2 py-1 rounded-lg text-white font-bold 
                    text-xs`}>
											{item.category_title}
										</small>

										<Markdown className='mt-4 mb-0'>{item.post_title}</Markdown>
									</div>
								))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Featured;
