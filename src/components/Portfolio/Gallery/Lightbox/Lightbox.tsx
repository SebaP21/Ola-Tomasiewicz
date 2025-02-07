import Image from "next/image";
import { FC } from "react";

import closeBtn from "../../../../assets/icons/close (2).png";

type LightBoxProps = {
	imageUrl: string;
	imageAlt: string;

	onClose: () => void;
};

const LightBox: FC<LightBoxProps> = ({ imageUrl, imageAlt, onClose }) => {
	return (
		<div className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50'>
			<Image
				src={imageUrl}
				alt={imageAlt}
				width={600}
				height={600}
				className='max-w-full max-h-full'
				priority
			/>

			<button
				onClick={onClose}
				className='absolute top-4 right-4 text-white bg-accent py-2 px-4  hover:bg-gray-700 transition'
			>
				<Image
					src={closeBtn}
					alt={"close-button"}
					width={30}
					height={30}
				/>
			</button>
		</div>
	);
};

export default LightBox;
