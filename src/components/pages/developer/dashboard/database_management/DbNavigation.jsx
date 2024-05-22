import React from "react";
import { BiPhoneCall, BiUserCircle } from "react-icons/bi";
import { IoIosHome } from "react-icons/io";
import {
	MdArticle,
	MdEmojiEvents,
	MdOutlineMedicalInformation,
} from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import DbLogo from "../../../../partials/svg/DbLogo";
import { CiGlobe } from "react-icons/ci";

const DbNavigation = ({ pageHandler, setPageHanlder }) => {
	const handleChangeTab = (navChange) => {
		setPageHanlder(navChange);
	};
	return (
		<>
			<aside className='px-4 py-6 w-[250px] h-screen border-r  border-line'>
				{/* fixed top-0 */}
				<div className='flex flex-col items-center justify-center gap-5'>
					<DbLogo />
					<h2 className='mb-0 text-balance w-full px-5  text-justify transition-all duration-500'>
						Bloge Posting
					</h2>
				</div>
				<ul className='dbnav'>
					<li className='dbnav-link'>
						<button className='flex items-center'>
							<CiGlobe />
							<Link to='/home'>Main Website</Link>
						</button>
					</li>
					<li
						className={`dbnav-link  ${
							pageHandler === "Dashboard" ? "active" : "font-medium"
						}`}>
						<RxDashboard />
						<button onClick={() => handleChangeTab("Dashboard")}>
							<Link to='/dashboard'>Dashboard</Link>
						</button>
					</li>
					<li
						className={`dbnav-link ${
							pageHandler === "Post" ? "active" : "font-medium"
						}`}>
						<MdArticle />
						<button onClick={() => handleChangeTab("Post")}>
							<Link to='/post'>Post</Link>
						</button>
					</li>
					<li
						className={`dbnav-link ${
							pageHandler === "Users" ? "active" : "font-medium"
						}`}>
						<BiUserCircle />
						<button onClick={() => handleChangeTab("Users")}>
							<Link to='/users'>Users</Link>
						</button>
					</li>
				</ul>
			</aside>
		</>
	);
};

export default DbNavigation;
