import Image from "next/image";
import { FC, useEffect } from "react";
import arrowLeft from "../../../../assets/icons/left-chevron.png";
import arrowRight from "../../../../assets/icons/right-chevron.png";

type LightBoxProps = {
	imageUrl: string;
	imageAlt: string;
	currentIndex: number;
	totalImages: number;
	onClose: () => void;
	onNext: () => void;
	onPrev: () => void;
};

const LightBox: FC<LightBoxProps> = ({
	imageUrl,
	imageAlt,
	currentIndex,
	totalImages,
	onClose,
	onNext,
	onPrev,
}) => {
	const handleScroll = (event: WheelEvent) => {
		if (event.deltaY > 0) {
			onNext();
		} else {
			onPrev();
		}
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === "ArrowRight") {
			onNext();
		} else if (event.key === "ArrowLeft") {
			onPrev();
		} else if (event.key === "Escape") {
			onClose();
		}
	};

	useEffect(() => {
		window.addEventListener("wheel", handleScroll, { passive: true });
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("wheel", handleScroll);
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);
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
				onClick={onPrev}
				className='absolute left-4 bottom-0 transform -translate-y-1/2 bg-accent p-2 rounded-full hover:bg-gray-400 transition'
				disabled={currentIndex === 0}
			>
				<Image
					src={arrowLeft}
					alt={"arrow-left"}
					width={50}
					height={50}
				/>
			</button>
			<button
				onClick={onNext}
				className='absolute right-4 bottom-0 transform -translate-y-1/2 bg-accent p-2 rounded-full hover:bg-gray-400 transition'
				disabled={currentIndex === totalImages - 1}
			>
				<Image
					src={arrowRight}
					alt={"arrow-right"}
					width={50}
					height={50}
				/>
			</button>
			<button
				onClick={onClose}
				className='absolute top-4 right-4 text-white bg-accent py-2 px-4  hover:bg-light hover:text-dark transition'
			>
				Zamknij
			</button>
		</div>
	);
};

export default LightBox;
