import React from "react";
import SectionBanner from "./SectionBanner";
import Card from "./Card";
import CardSM from "./CardSM";
import useQueryData from "../../../../custom-hook/useQueryData";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import { devBaseImgUrl, ImgUrl } from "../../../../helpers/functions-general";
import Headline from "./Headline";

const Trending = ({ height, item }) => {
	const [hasLink, setHasLink] = React.useState(false);
	const [isSearch, setIsSearch] = React.useState(false);
	const [keyword, setKeyword] = React.useState("");
	// post counter
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
	const getTrending = () =>
		post?.data.filter(
			(item) => item.post_category_id == 1 && item.post_is_featured == 0
		);
	const getHighlight = () =>
		post?.data.filter(
			(item) => item.post_category_id == 5 && item.post_is_featured == 1
		);
	// console.log("Hindi featured", getTrending());
	// console.log("featured", getHighlight());
	return (
		<>
			<div className='container'>
				<div className='py-10'>
					<SectionBanner hasLink={hasLink} />
				</div>
				<div className='grid md:gap-10 mt-5 mb-10 md:grid-cols-[1fr_2fr]'>
					{/* access array via indexing to pass data to compontent */}
					<Card item={!isLoading && getHighlight()[0]} />
					<div className='grid gap-10 md:grid-cols-2'>
						{/* try dito */}
						{!isLoading &&
							getTrending()
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
											{item.tag_title}
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

export default Trending;
