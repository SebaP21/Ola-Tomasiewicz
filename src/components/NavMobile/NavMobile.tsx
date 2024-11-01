"use client";

import { useEffect, useState } from "react";
import mobileNavIcon from "../../assets/icons/burgerTwo.png";
import closeBtnIcon from "../../assets/icons/close (2).png";
import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/pictures/ZNAK WODNY BIAŁY_Obszar roboczy 1.png";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/photo (2).png";

const NavMobile = () => {
	const [isNavShown, setIsNavShown] = useState(false);
	const [isMasterClassShown, setIsMasterClassShown] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const onClickNav = () => {
		setIsNavShown((prev) => !prev);
	};

	const onClickMasterClassNav = () => {
		setIsMasterClassShown((prev) => !prev);
	};

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className='relative'>
			<div
				className={`fixed top-0 w-full h-[8svh] flex items-center justify-between z-50 lg:hidden  transition-all duration-500 ${
					isNavShown ? "-translate-y-full" : "translate-y-0"
				} ${isScrolled ? "bg-black bg-opacity-85" : "bg-transparent"}`}
			>
				<div
					className={`flex items-center ml-5 h-full transition-opacity duration-500 ${
						isScrolled ? "opacity-100" : "opacity-0"
					}`}
				>
					<Link 
					className="h-full p-0"
					href={"/"}>
					<Image
						src={logo}
						alt='Logo'
						width={150}
						height={150}
						className='h-full w-auto object-contain'
					/>
					</Link>
				</div>

				<div className='flex max-w-[50px] mr-5 transition-all hover:max-w-[55px]'>
					<button onClick={onClickNav}>
						<Image
							src={mobileNavIcon}
							alt='mobile-nav-icon'
							width={300}
							height={300}
						/>
					</button>
				</div>
			</div>

			<div
				className={`fixed bottom-0 right-0 h-full w-full md:w-[70%] bg-black bg-opacity-85 text-white text-4xl flex flex-col justify-evenly items-center uppercase transition-transform duration-500 ease-in-out z-50 transform ${
					isNavShown ? "translate-y-0" : "translate-y-full"
				}`}
			>
				<div className='absolute top-7 w-[90%] flex items-center justify-between'>
					<div className='flex gap-4'>
						<Link
							onClick={onClickNav}
							href={"/"}
							className='transition-colors hover:text-accent'
						>
							<Image
								src={facebook}
								alt='Ola Tomasiewicz- Makeup facebook'
								width={25}
								height={25}
								className='w-full h-full object-cover'
							/>
						</Link>
						<Link
							onClick={onClickNav}
							href={"/"}
							className='transition-colors hover:text-accent'
						>
							<Image
								src={instagram}
								alt='Ola Tomasiewicz- Makeup instagram'
								width={30}
								height={30}
								className='w-full h-full object-cover'
							/>
						</Link>
					</div>
					<button
						onClick={onClickNav}
						className='transition-transform duration-300'
					>
						<Image
							src={closeBtnIcon}
							alt='close-btn'
							width={30}
							height={30}
						/>
					</button>
				</div>

				<Link
					onClick={onClickNav}
					href={"/"}
					className='transition-colors hover:text-accent'
				>
					<div className='min-h-[27svh] max-h-[25svh] min-w-[27svh] max-w-[25svh]'>
						<Image
							src={logo}
							alt='Ola Tomasiewicz- Makeup logo'
							width={300}
							height={300}
							className='w-full h-full object-cover'
						/>
					</div>
				</Link>

				<Link
					onClick={onClickNav}
					href={"/cennik"}
					className='transition-colors hover:text-accent'
				>
					<div className='border-b border-accent'>
						<h4 className='mb-2'>Cennik</h4>
					</div>
				</Link>

				<div
					onClick={onClickMasterClassNav}
					className='flex flex-col items-center'
				>
					<h4
						className={`transition-colors ${
							isMasterClassShown ? "text-accent" : "text-white"
						} hover:text-accent border-b border-accent pb-2`}
					>
						Szkolenia
					</h4>
					<div
						className={`overflow-hidden transition-all duration-500 ease-in-out ${
							isMasterClassShown
								? "max-h-[500px] opacity-100"
								: "max-h-0 opacity-0"
						}`}
					>
						<div className='flex flex-col gap-10 mt-10 text-center text-lg uppercase'>
							<Link
								onClick={onClickNav}
								href={"/szkolenia/#z-makijazu"}
								className='transition-colors hover:text-accent'
							>
								<div className='border-b border-accent'>
									<h4 className='mb-2'>Szkolenia z makijażu</h4>
								</div>
							</Link>
							<Link
								onClick={onClickNav}
								href={"/szkolenia/#ze-stylizacji-fryzur"}
								className='transition-colors hover:text-accent'
							>
								<div className='border-b border-accent'>
									<h4 className='mb-2'>Szkolenia ze stylizacji fryzur</h4>
								</div>
							</Link>
							<Link
								onClick={onClickNav}
								href={"/szkolenia/#lekcja-makijazu"}
								className='transition-colors hover:text-accent'
							>
								<div className='border-b border-accent'>
									<h4 className='mb-2'>Lekcja makijażu na własny użytek</h4>
								</div>
							</Link>
						</div>
					</div>
				</div>

				<Link
					onClick={onClickNav}
					href={"/vouchery"}
					className='transition-colors hover:text-accent'
				>
					<div className='border-b border-accent'>
						<h4 className='mb-2'>Vouchery</h4>
					</div>
				</Link>
				<Link
					onClick={onClickNav}
					href={"/regulamin"}
					className='transition-colors hover:text-accent'
				>
					<div className='border-b border-accent'>
						<h4 className='mb-2'>Regulamin</h4>
					</div>
				</Link>
				
			</div>
		</div>
	);
};

export default NavMobile;
