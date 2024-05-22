import React from "react";
import SectionBanner from "./SectionBanner";
import Card from "./Card";
import CardSM from "./CardSM";

const Trending = () => {
	const [hasLink, setHasLink] = React.useState(false);
	return (
		<>
			<div className='container'>
				<div className='py-10'>
					<SectionBanner hasLink={hasLink} />
				</div>
				<div className='grid md:gap-10 mt-5 mb-10 md:grid-cols-[1fr_2fr]'>
					<Card />
					<div className='grid gap-10 md:grid-cols-2'>
						<CardSM
							description={
								"Lorem ipsum, dolor sit amet consectetur adipisicing."
							}
						/>
						<CardSM
							description={
								"Lorem ipsum, dolor sit amet consectetur adipisicing."
							}
						/>
						<CardSM
							description={
								"Lorem ipsum, dolor sit amet consectetur adipisicing."
							}
						/>
						<CardSM
							description={
								"Lorem ipsum, dolor sit amet consectetur adipisicing."
							}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Trending;
