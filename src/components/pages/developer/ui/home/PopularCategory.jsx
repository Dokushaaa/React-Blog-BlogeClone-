import React from "react";
import Card from "./Card";
import SectionBanner from "./SectionBanner";
import CardSM from "./CardSM";

const PopularCategory = () => {
	const count = [1, 2, 3, 4];
	const category = ["Beauty1", "Beauty2", "Beauty3", "Beauty4", "Beauty5"];
	return (
		<>
			<div className='PopularCategory py-10'>
				<div className='container'>
					<SectionBanner
						title='Popular Category'
						hasLink={true}
						link='/popularcategory'
					/>
					<div className='md:grid mt-10 md:grid-cols-4 gap-10'>
						{count.map((item, key) => (
							<div
								key={key}
								className='pt-[2.5rem] text-center'>
								<CardSM
									description={category[key]}
									visibility={"hidden"}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default PopularCategory;
