import React from "react";
import UiHeader from "../partials/UiHeader";
import UiFooter from "../partials/UiFooter";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Single = () => {
	const travel = ["travel", "travel", "travel", "travel"];
	return (
		<>
			<UiHeader />
			<div className='banner mt-5 mb-10'>
				<div className='container'>
					<div className='banner__wrapper  text-center'>
						<h1 className='max-w-[800px] mb-0 mt-5 mx-auto py-10 px-5 bg-opacity-10 rounded-lg border-2 border-header-opacity-40 bg-header'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						</h1>
					</div>
				</div>
				<div className='container'>
					<div className='md:grid md:grid-cols-[2fr_1fr] gap-10'>
						<article>
							<div className='mb-10'>
								<div className='flex flex-row gap-2'>
									<small
										className='hover:bg-accent bg-stone-600 text-center text-lg mb-5 px-2 py-1 rounded-lg text-white font-bold 
                    					text-sm'>
										Travel
									</small>
								</div>
								<h2>Lorem ipsum dolor sit amet.</h2>
								<div className='flex justify-between items-center mt-4'>
									<div className='flex gap-3 items-center'>
										<img
											src='https://via.placeholder.com/40x40'
											alt=''
											className='rounded-full size-10 mb-0 object-cover'
										/>
										<small className='mb-0 text-nowrap opacity-60'>
											Johnny Hale
										</small>
									</div>
									<small className='opacity-60'>August 23, 2022</small>
								</div>
								<div className='flex flex-col gap-5'>
									<img
										src='https://static.wikia.nocookie.net/bini/images/c/ca/BINI_1.PNG/revision/latest/scale-to-width-down/1000?cb=20210422033212'
										alt=''
										className='w-full object-cover h-[300px] block transition-transform hover:scale-110'
									/>

									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Ducimus, deleniti molestias maxime aut inventore repellat
										repellendus vitae veritatis est excepturi quos dolores nisi
										dolorum voluptatum quibusdam fugit iusto amet id officiis
										optio ratione necessitatibus! Numquam quam labore molestias
										quaerat natus illo facilis vitae quisquam tempore
										repellendus neque laborum, ratione nesciunt.
									</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Ducimus, deleniti molestias maxime aut inventore repellat
										repellendus vitae veritatis est excepturi quos dolores nisi
										dolorum voluptatum quibusdam fugit iusto amet id officiis
										optio ratione necessitatibus! Numquam quam labore molestias
										quaerat natus illo facilis vitae quisquam tempore
										repellendus neque laborum, ratione nesciunt.
									</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Ducimus, deleniti molestias maxime aut inventore repellat
										repellendus vitae veritatis est excepturi quos dolores nisi
										dolorum voluptatum quibusdam fugit iusto amet id officiis
										optio ratione necessitatibus! Numquam quam labore molestias
										quaerat natus illo facilis vitae quisquam tempore
										repellendus neque laborum, ratione nesciunt.
									</p>
									<h3>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Animi, corrupti.
									</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Ducimus, deleniti molestias maxime aut inventore repellat
										repellendus vitae veritatis est excepturi quos dolores nisi
										dolorum voluptatum quibusdam fugit iusto amet id officiis
										optio ratione necessitatibus! Numquam quam labore molestias
										quaerat natus illo facilis vitae quisquam tempore
										repellendus neque laborum, ratione nesciunt.
									</p>
									<ul>
										<li>Lorem ipsum dolor sit amet.</li>
										<li>
											Lorem ipsum dolor sit, amet consectetur adipisicing elit.
											Voluptate, temporibus.
										</li>
										<li>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
										</li>
									</ul>
								</div>
							</div>
						</article>
						<aside>
							<div className='sticky top-4'>
								<div className='shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)] p-5 rounded-2xl mb-5 '>
									<div className='flex justify-between items-center mt-4'>
										<div className='flex flex-col gap-3 items-center'>
											<img
												src='https://via.placeholder.com/100x100'
												alt=''
												className='rounded-full size-[120px] mb-0 object-cover'
											/>
											<h3 className='text-center'>Johnny Dale</h3>
											<p className='text-center mb-5 text-balance'>
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Pariatur corporis voluptatum nihil modi dolorem itaque
												voluptatibus, eveniet illum eius corrupti eos, magni
												sequi, minima impedit qui maiores libero quis placeat
												dicta consequuntur ratione molestias non quas nisi.
												Maxime, eius iste illum quam facilis culpa. Porro
												voluptatum eum laudantium odit. Corrupti.
											</p>
											<ul className='flex justify-center gap-4 flex-wrap my-2'>
												<li>
													<Link className='flex items-center gap-2 text-2xl'>
														<FaFacebook />
													</Link>
												</li>
												<li>
													<Link className='flex items-center gap-2 text-2xl'>
														<FaTwitter />
													</Link>
												</li>
												<li>
													<Link className='flex items-center gap-2 text-2xl'>
														<FaInstagram />
													</Link>
												</li>
												<li>
													<Link className='flex items-center gap-2 text-2xl'>
														<FaYoutube />
													</Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
								{/* latest post */}
								<div className='shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)] p-5 rounded-2xl mb-5 '>
									<h2>Latest Posts</h2>
									<div className='grid grid-cols-[90px_1fr] gap-3 mb-4'>
										<img
											src='https://via.placeholder.com/90x90'
											alt=''
											className='h-full w-full object-cover'
										/>
										<div>
											<h4 className='mb-0'>
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
											</h4>
											<small>May 5,2022</small>
										</div>
									</div>
								</div>
							</div>
						</aside>
					</div>
				</div>
			</div>
			<UiFooter />
		</>
	);
};

export default Single;
