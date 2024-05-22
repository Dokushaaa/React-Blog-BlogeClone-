import React from "react";

const CardSM = ({ description = "", visibility = "" }) => {
	return (
		<>
			<div className='shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)]  p-5 rounded-2xl'>
				<div className='overflow-hidden rounded-xl h-[250px] mb-5 -mt-10'>
					<img
						src='https://starmometer.com/wp-content/uploads/2021/06/BINI-will-unveil-a-fiercer-look-sound-and-attitude-at-their-grand-two-part-launch-this-June-on-KTX.PH-2.jpg'
						alt=''
						className='w-full object-cover h-[300px] block   transition-transform hover:scale-110'
					/>
				</div>
				<small
					className={`hover:bg-accent bg-stone-600  px-2 py-1 rounded-lg text-white font-bold 
                    text-xs ${visibility}`}>
					Travel
				</small>
				<h3 className='mt-4 mb-0'>{description}</h3>
			</div>
		</>
	);
};

export default CardSM;
