import React from "react";
import Link from "next/link";
import Image from "next/image";
import facebookIcon from "@/assets/icons/social (1).png";
import instaIcon from "@/assets/icons/camera.png";
import Divider from "../Divider/Divider";

const CosmetologyHeader = () => {
	const videoSrc = "/videos/header-video.mp4";

	return (
		<>
			{/* MOBILE */}
			<header className='w-full min-h-[100svh] flex items-end justify-start overflow-hidden md:hidden relative'>
				<div className='absolute top-0 left-0 w-full h-full z-0'>
					<video
						autoPlay
						muted
						loop
						playsInline
						className='w-full h-full object-cover'
					>
						<source
							src={videoSrc}
							type='video/mp4'
						/>
					</video>
					<div className='absolute top-0 left-0 w-full h-full bg-black/50' />
				</div>

				<div className='relative z-10 max-w-[80%] animate-fade-right'>
					<Link href='/'>
						<Image
							src='/logo-white.png'
							alt='Logo'
							width={500}
							height={500}
							priority
						/>
					</Link>
				</div>
			</header>

			{/* DESKTOP */}
			<header className='hidden w-full h-[100svh] overflow-hidden md:flex'>
				<div className='min-w-[30%] max-w-[30%] bg-black flex flex-col justify-center z-10 2xl:max-w-[50%] 2xl:min-w-[50%] lg:justify-evenly 2xl:justify-around'>
					<div className='max-w-[100%] animate-fade-right 2xl:mx-auto 2xl:order-2 2xl:min-h-[72svh]'>
						<Link href='/'>
							<Image
								src='/logo-white.png'
								alt='Logo'
								width={500}
								height={500}
							/>
						</Link>
					</div>
					<div className='text-light text-xl lg:flex flex-col w-full min-h-[40svh] gap-0 justify-evenly items-center animate-fade-right md:hidden xl:min-h-[35svh] 2xl:flex-row 2xl:min-h-[5svh]'>
						{["cennik", "szkolenia", "vouchery", "regulamin", "#kontakt"].map(
							(path) => (
								<Link
									key={path}
									href={`/${path}`}
								>
									<div className='min-w-[12svh] flex flex-col gap-2 transition-all hover:scale-105 items-center'>
										<h4 className='tracking-wider uppercase'>
											{path === "#kontakt"
												? "Kontakt"
												: path.charAt(0).toUpperCase() + path.slice(1)}
										</h4>
										<Divider width={100} />
									</div>
								</Link>
							)
						)}
					</div>
					<div className='lg:flex min-w-[12svh] justify-center gap-8 animate-fade-right md:hidden'>
						<Link
							href='https://www.facebook.com/profile.php?id=100083388214728'
							className='transition-all hover:scale-105'
						>
							<Image
								src={facebookIcon}
								alt='facebook-icon'
								width={30}
								height={30}
							/>
						</Link>
						<Link
							href='https://www.instagram.com/ola_tomasiewicz_makeup/'
							className='transition-all hover:scale-105'
						>
							<Image
								src={instaIcon}
								alt='instagram-icon'
								width={30}
								height={30}
							/>
						</Link>
					</div>
				</div>

				<div className='relative w-full h-full'>
					<div className='absolute top-0 left-0 w-full h-full z-0'>
						<video
							autoPlay
							muted
							loop
							playsInline
							className='w-full h-full object-cover'
						>
							<source
								src={videoSrc}
								type='video/mp4'
							/>
						</video>
						<div className='absolute top-0 left-0 w-full h-full bg-black/50' />
					</div>
				</div>
			</header>
		</>
	);
};

export default CosmetologyHeader;
