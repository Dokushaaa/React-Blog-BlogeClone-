import React from "react";

const BannerSlider = () => {
	return (
		<div className='banner-slider'>
			<div className='relative flex justify-center items-center h-[50vh]'>
				<img
					className='object-cover h-[50vh] w-full absolute top-0 left-0  z-[-1]'
					src='https://via.placeholder.com/800x400'
					alt=''
				/>
				<div className='text-center'>
					<ul className='flex gap-2 justify-center'>
						<li className='bg-stone-500 px-4 p-2 rounded-lg text-white font-bold text-xs'>
							Travel
						</li>
					</ul>
					<h2 className='px-1 mt-4 text-balance text-3xl text-primary'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Accusantium, tempora.
					</h2>
					<ul className='flex gap-4 justify-center text-sm text-primary'>
						<li>Loverboy</li>
						<li>May 22, 2024</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default BannerSlider;
