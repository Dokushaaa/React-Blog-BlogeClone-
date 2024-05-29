import React from "react";
import { devBaseImgUrl } from "../../../../helpers/functions-general";
import useQueryData from "../../../../custom-hook/useQueryData";

const Headline = ({ height, item }) => {
	const [hasLink, setHasLink] = React.useState(false);
	const [isSearch, setIsSearch] = React.useState(false);
	const [keyword, setKeyword] = React.useState("");

	//  post counter
	const { isLoadingPost, data: post } = useQueryData(
		isSearch ? "/v1/post/search" : "/v1/post", // endpoint
		isSearch ? "post" : "get", // method
		"post", //key
		// ["post", isSearch],
		{
			searchValue: keyword,
		}
	);
	// category add-on
	const {
		isLoading,
		isFetching,
		error,
		data: category,
	} = useQueryData(
		`/v1/category`, // endpoint
		"get", // method
		"category" // key
	);
	return (
		<>
			<div className='card__xl shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)]  p-5 rounded-2xl mb-10'>
				<div
					className={`overflow-hidden rounded-xl mb-5 -mt-10 ${
						height === "xl" ? "h-[600px]" : "h-[300px]"
					}`}>
					<img
						src='https://via.placeholder.com/400x400'
						// src={`${devBaseImgUrl}/${item?.post_image}`}
						alt=''
						className={`w-full object-cover $ rounded-xl  h-full overflow-hidden  hover:scale-110 transition-transform`}
					/>
				</div>

				<small
					className='hover:bg-accent bg-stone-600  px-2 py-1 rounded-xl text-white font-bold 
                    text-xs'>
					{category?.data[4].category_title}
				</small>

				<h3 className='my-4'>{item?.post_article}</h3>
				{/* <p className='line-clamp-3 text-balance'>{post?.data[4].post_title}</p> */}

				<div className='flex justify-between items-center mt-4'>
					<div className='flex gap-3 items-center'>
						<img
							src='https://via.placeholder.com/40x40'
							alt=''
							className='rounded-full size-10 object-cover'
						/>
						<small className='mb-0 text-nowrap opacity-60'>Johnny Hale</small>
					</div>
					<small className='opacity-60'>August 23, 2022</small>
				</div>
			</div>
		</>
	);
};

export default Headline;
