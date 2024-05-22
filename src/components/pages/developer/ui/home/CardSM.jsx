import React from "react";
import { baseImgUrl, ImgUrl } from "../../../../helpers/functions-general";
import Markdown from "react-markdown";

const CardSM = ({
	image = "",
	article = "",
	category = "",
	visibility = "",
}) => {
	return (
		<>
			<div className='shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)]  p-5 rounded-2xl'>
				<div className='overflow-hidden rounded-xl h-[250px] mb-5 -mt-10'>
					<img
						src={`${baseImgUrl}/${image}`}
						alt=''
						className='w-full object-cover h-[300px] block   transition-transform hover:scale-110'
					/>
				</div>
				<small
					className={`hover:bg-accent bg-stone-600  px-2 py-1 rounded-lg text-white font-bold 
                    text-xs ${visibility}`}>
					{category}
				</small>
				<Markdown className={`mt-4 mb-0`}>{article}</Markdown>
			</div>
		</>
	);
};

export default CardSM;
