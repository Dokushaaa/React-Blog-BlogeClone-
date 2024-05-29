import React from "react";
import {
	FaAngleDown,
	FaBars,
	FaFacebook,
	FaInstagram,
	FaSearch,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const UiHeader = () => {
	const [showNav, setShowNav] = React.useState(false);
	const handleShowNav = () => setShowNav(!showNav);
	return (
		<header>
			<div className='bg-accent text-lightcolor'>
				<div className='container'>
					<div className='flex justify-between items-center py-2'>
						<ul className='flex gap-4'>
							<li>
								<Link
									className='flex items-center gap-5 text-white'
									to='#'>
									<FaFacebook />
								</Link>
							</li>
							<li>
								<Link
									className='flex items-center gap-5 text-white'
									to='#'>
									<FaInstagram />
								</Link>
							</li>
							<li>
								<Link
									className='flex items-center gap-5 text-white'
									to='#'>
									<FaTwitter />
								</Link>
							</li>
							<li>
								<Link
									className='flex items-center gap-5 text-white'
									to='#'>
									<FaYoutube />
								</Link>
							</li>
						</ul>
						<ul className='flex gap-4'>
							<li>
								<Link
									className='flex items-center gap-5 text-white'
									to='/login'>
									Login
								</Link>
							</li>
							<li>
								<Link
									className='flex items-center gap-5 text-white'
									to='/register'>
									Register
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='relative'>
				<div className='container flex justify-between items-center sticky top-0 bg-primary py-4 '>
					<h1>BLOG</h1>
					<div className='flex gap-5'>
						<button className='size-8 bg-content text-primary flex justify-center items-center rounded-lg text-sm'>
							<FaSearch />
						</button>
						<button
							className='text-2xl md:hidden'
							onClick={handleShowNav}>
							<FaBars />
						</button>
					</div>
				</div>

				<nav
					className={`md:h-auto md:!max-h-[30px] md:absolute md:top-7 md:right-[22.5rem] text-xl ${
						showNav ? "navshow" : ""
					}`}>
					<ul className='space-y-6 p-4 md:flex md:gap-5 md:space-y-0 md:p-0'>
						<li>
							<Link
								className='flex items-center gap-5 font-bold transition-color hover:text-accent active:text-accent'
								to='/home'>
								Home <FaAngleDown />
							</Link>
						</li>
						<li>
							<Link
								className='flex items-center gap-5 font-bold transition-color hover:text-accent'
								to='#'>
								About <FaAngleDown />
							</Link>
						</li>
						<li>
							<Link
								className='flex items-center gap-5 font-bold transition-color hover:text-accent'
								to='#'>
								Blog <FaAngleDown />
							</Link>
						</li>
						<li>
							<Link
								className='flex items-center gap-5 font-bold transition-color hover:text-accent'
								to='#'>
								Post <FaAngleDown />
							</Link>
						</li>
						<li>
							<Link
								className='flex items-center gap-5 font-bold transition-color hover:text-accent'
								to='#'>
								Contact <FaAngleDown />
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default UiHeader;
