import Image from "next/image";

import Link from "next/link";

import logo from "../../assets/pictures/ZNAK WODNY BIAŁY_Obszar roboczy 1.png";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/photo (2).png";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='w-full bg-black flex justify-center items-center '>
			<div className='flex flex-col w-[90%] items-center justify-evenly'>
				<div className='w-full flex items-center justify-center'>
					<Link
						href={"/"}
						className='flex max-w-[70%] sm:max-w-[40%] lg:max-w-[20%]'
					>
						<Image
							src={logo}
							alt={"Ola Tomasiewicz-Makeup Artist Jaworzno"}
							width={500}
							height={500}
							className='h-full w-auto object-contain'
						/>
					</Link>
				</div>

				<div className='w-full flex flex-col items-center gap-2 py-4'>
					<div className='w-full flex justify-between'>
						<div className='flex flex-col gap-2 lg:flex-row lg:gap-12'>
							<Link
								className='font-oswald text-white transition-colors text-lg hover:text-accent'
								href={"/cennik"}
							>
								Cennik
							</Link>
							<Link
								className='font-oswald text-white transition-colors text-lg hover:text-accent'
								href={"/pakiet-slubny"}
							>
								Pakiet Ślubny
							</Link>
							<Link
								className='font-oswald text-white transition-colors text-lg hover:text-accent'
								href={"/kosmetologia"}
							>
								Kosmetologia
							</Link>
						</div>
						<div className='flex w-[30%] items-center justify-evenly lg:w-[10%]'>
							<Link
								href={"/"}
								className='max-w-[30px]'
							>
								<Image
									src={facebook}
									alt={"Ola Tomasiewicz-Makeup Artist Jaworzno"}
									width={30}
									height={30}
								/>
							</Link>
							<Link
								href={"/"}
								className='max-w-[30px]'
							>
								<Image
									src={instagram}
									alt={"Ola Tomasiewicz-Makeup Artist Jaworzno"}
									width={30}
									height={30}
								/>
							</Link>
						</div>
						<div className='flex flex-col gap-2 text-right lg:flex-row lg:gap-12'>
							<Link
								className='font-oswald text-white transition-colors text-lg hover:text-accent'
								href={"/szkolenia"}
							>
								Szkolenia
							</Link>
							<Link
								className='font-oswald text-white transition-colors text-lg hover:text-accent'
								href={"/vouchery"}
							>
								Vouchery
							</Link>
							<Link
								className='font-oswald text-white transition-colors text-lg hover:text-accent'
								href={"/regulamin"}
							>
								Regulamin
							</Link>
						</div>
					</div>
					<Link
						className='font-oswald text-white transition-colors text-lg hover:text-accent lg:pt-4'
						href={"polityka-prywatnosci"}
					>
						Polityka prywatności
					</Link>
					<div>
						<p className='text-oswald text-accent py-2'>
							Copyright © {currentYear} Ola Tomasiewicz Makeup Artist
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
