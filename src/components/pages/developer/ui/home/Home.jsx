import React from "react";
import UiHeader from "../partials/UiHeader";
import BannerSlider from "./BannerSlider";
import Trending from "./Trending";
import Featured from "./Featured";
import FashionStyle from "./FashionStyle";
import PopularCategory from "./PopularCategory";
import UiFooter from "../partials/UiFooter";

const Home = () => {
	return (
		<>
			<UiHeader />
			<BannerSlider />
			<Trending />
			<Featured />
			<FashionStyle />
			<PopularCategory />
			<UiFooter />
		</>
	);
};

export default Home;
