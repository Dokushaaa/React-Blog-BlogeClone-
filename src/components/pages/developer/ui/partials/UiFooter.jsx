import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const UiFooter = () => {
	return (
		<>
			<footer className='w-full  bg-header text-white px-2 mt-5 pt-12'>
				<div className='py-5'>
					<div className='flex flex-row gap-10 justify-center items-center'>
						<img
							src='https://via.placeholder.com/100x100'
							alt=''
						/>
						<h2 className='text-white'>Blogie Coin</h2>
					</div>
					<h4 className='text-white text-center'>
						Subscribe to our newsletter
					</h4>
					<p className='text-center'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sit!
					</p>
					<form
						action=''
						className='flex items-center justify-center relative max-w-[700px] mx-auto'>
						<input
							type='text'
							className='p-4 rounded-xl placeholder:opacity-60 w-full mx-5'
							placeholder='Your EmailAddress'
						/>
						<button className='text-white bg-accent p-3 rounded-xl absolute top-1 right-7'>
							Subscribe
						</button>
					</form>
					<ul className='flex justify-center gap-4 flex-wrap my-5'>
						<li>
							<Link className='flex items-center gap-2 text-2xl'>
								<FaFacebook />
								Facebook
							</Link>
						</li>
						<li>
							<Link className='flex items-center gap-2 text-2xl'>
								<FaTwitter /> Facebook
							</Link>
						</li>
						<li>
							<Link className='flex items-center gap-2 text-2xl'>
								<FaInstagram /> Facebook
							</Link>
						</li>
						<li>
							<Link className='flex items-center gap-2 text-2xl'>
								<FaYoutube /> Facebook
							</Link>
						</li>
					</ul>
					<div className='copyright-notice pt-6 mt-6  border-t border-content text-center '>
						<p className='mb-0'>&copy; 2024. All Rights Reserved</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default UiFooter;
