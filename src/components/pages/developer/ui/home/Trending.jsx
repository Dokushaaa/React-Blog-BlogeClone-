import React from "react";
import SectionBanner from "./SectionBanner";
import Card from "./Card";
import CardSM from "./CardSM";
import useQueryData from "../../../../custom-hook/useQueryData";
import Markdown from "react-markdown";

const Trending = () => {
	const [hasLink, setHasLink] = React.useState(false);
	const [isSearch, setIsSearch] = React.useState(false);
	const [keyword, setKeyword] = React.useState("");
	// post counter
	const { data: post } = useQueryData(
		isSearch ? "/v1/post/search" : "/v1/post", // endpoint
		isSearch ? "post" : "get", // method
		"post", //key
		// ["post", isSearch],
		{
			searchValue: keyword,
		}
	);
	return (
		<>
			<div className='container'>
				<div className='py-10'>
					<SectionBanner hasLink={hasLink} />
				</div>
				<div className='grid md:gap-10 mt-5 mb-10 md:grid-cols-[1fr_2fr]'>
					<Card />
					<div className='grid gap-10 md:grid-cols-2'>
						{post?.data.map((item, key) => (
							<CardSM
								// use visibility if object does not require a category tag to be visibile
								key={key}
								image={item.post_image}
								article={item.post_article}
								category={item.post_category}
							/>
						))}

						{/* try dito */}
						{/* {post?.data.map((item, key) => (
							<div
								key={key}
								className='shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)]  p-5 rounded-2xl'>
								<div className='overflow-hidden rounded-xl h-[250px] mb-5 -mt-10'>
									<img
										src='https://starmometer.com/wp-content/uploads/2021/06/BINI-will-unveil-a-fiercer-look-sound-and-attitude-at-their-grand-two-part-launch-this-June-on-KTX.PH-2.jpg'
										alt=''
										className='w-full object-cover h-[300px] block   transition-transform hover:scale-110'
									/>
								</div>
								<small
									className={`hover:bg-accent bg-stone-600  px-2 py-1 rounded-lg text-white font-bold 
                    text-xs`}>
									Travel
								</small>
								<h3 className='mt-4 mb-0'>{item.post_article}</h3>
								<Markdown>{item.post_article}</Markdown>
							</div>
						))} */}
						{/* */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Trending;
