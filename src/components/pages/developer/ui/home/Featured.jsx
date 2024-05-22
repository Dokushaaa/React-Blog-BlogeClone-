import React from "react";
import Card from "./Card";
import SectionBanner from "./SectionBanner";

const Featured = () => {
	return (
		<>
			<div className='featured py-10'>
				<div className='container'>
					<SectionBanner
						title='Featured Now'
						hasLink={true}
						link='/featured'
					/>
					<div className='md:grid mt-10 md:grid-cols-3 gap-10'>
						<Card height='sm' />
						<Card height='sm' />
						<Card height='sm' />
						<Card height='sm' />
						<Card height='sm' />
					</div>
				</div>
			</div>
		</>
	);
};

export default Featured;
