

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Divider from "../Divider/Divider";

import facebookIcon from "../../assets/icons/social (1).png";
import instaIcon from "../../assets/icons/camera.png";

const OfflineDesktopNav: FC = () => {
	return (
		<>
			{/* MOBILE HEADER */}
			<header
				className='w-full min-h-[100svh] bg-cover bg-center flex items-end justify-start overflow-hidden md:hidden'
				style={{
					backgroundImage: "url('/weddingheader.jpeg')",
				}}
			>
				<div className='max-w-[80%] animate-fade-right '>
					<Link href={"/"}>
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

			{/* DESKTOP HEADER */}
			<header className='hidden w-full h-[100svh] overflow-hidden md:flex'>
				<div className='min-w-[30%] max-w-[30%] bg-black flex flex-col justify-center z-10 2xl:max-w-[50%] 2xl:min-w-[50%] lg:justify-evenly 2xl:justify-around'>
					<div className='max-w-[100%] animate-fade-right mx-auto 2xl:max-w-[50%] mt-[-50px]'>
						<Link href={"/"}>
							<Image
								src='/logo-white.png'
								alt='Logo'
								width={500}
								height={500}
							/>
						</Link>
					</div>

					<div className='text-light text-xl lg:flex flex-col w-full min-h-[40svh] gap-0 justify-evenly items-center animate-fade-right'>
						<Link href={"/cennik"}>
							<div className='min-w-[12svh] flex flex-col gap-2 transition-all hover:scale-105 items-center pb-4'>
								<h4 className='tracking-wider uppercase'>Cennik</h4>
								<Divider width={100} />
							</div>
						</Link>
						<Link href={"/pakiet-slubny"}>
							<div className='min-w-[12svh] flex flex-col gap-2 transition-all hover:scale-105 items-center pb-4'>
								<h4 className='tracking-wider uppercase'>Pakiet Ślubny</h4>
								<Divider width={100} />
							</div>
						</Link>
						<Link href={"/kosmetologia"}>
							<div className='min-w-[12svh] flex flex-col gap-2 transition-all hover:scale-105 items-center pb-4'>
								<h4 className='tracking-wider uppercase'>Kosmetologia</h4>
								<Divider width={100} />
							</div>
						</Link>
						<Link href={"/szkolenia"}>
							<div className='min-w-[12svh] flex flex-col gap-2 transition-all hover:scale-105 items-center pb-4'>
								<h4 className='tracking-wider uppercase'>Szkolenia</h4>
								<Divider width={100} />
							</div>
						</Link>
						<Link href={"/vouchery"}>
							<div className='min-w-[12svh] flex flex-col gap-2 transition-all hover:scale-105 items-center pb-4'>
								<h4 className='tracking-wider uppercase'>Vouchery</h4>
								<Divider width={100} />
							</div>
						</Link>
						<Link href={"/regulamin"}>
							<div className='min-w-[12svh] flex flex-col gap-2 transition-all hover:scale-105 items-center pb-4'>
								<h4 className='tracking-wider uppercase'>Regulamin</h4>
								<Divider width={100} />
							</div>
						</Link>
						<Link href={"/#kontakt"}>
							<div className='min-w-[12svh] flex flex-col gap-2 transition-all hover:scale-105 items-center pb-4'>
								<h4 className='tracking-wider uppercase'>Kontakt</h4>
								<Divider width={100} />
							</div>
						</Link>
					</div>

					<div className='lg:flex min-w-[12svh] justify-center gap-8 animate-fade-right md:hidden'>
						<Link
							href={"https://www.facebook.com/profile.php?id=100083388214728"}
							className='transition-all hover:scale-105'
						>
							<Image
								src={facebookIcon}
								alt={"facebook-icon"}
								width={30}
								height={30}
							/>
						</Link>
						<Link
							href={"https://www.instagram.com/ola_tomasiewicz_makeup/"}
							className='transition-all hover:scale-105'
						>
							<Image
								src={instaIcon}
								alt={"instagram-icon"}
								width={30}
								height={30}
							/>
						</Link>
					</div>
				</div>

				<div
					className='w-full bg-cover'
					style={{
						backgroundImage: "url('/weddingheader.jpeg')",
					}}
				></div>
			</header>
		</>
	);
};

export default OfflineDesktopNav;
