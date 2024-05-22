import React from "react";
import Card from "./Card";
import SectionBanner from "./SectionBanner";

const FashionStyle = () => {
	return (
		<>
			<div className='FashionStyle py-10'>
				<div className='container'>
					<SectionBanner
						title='Fashion and Style'
						hasLink={true}
						link='/fashionstyle'
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

export default FashionStyle;
