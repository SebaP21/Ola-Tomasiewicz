"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "./Lightbox/Lightbox";

type ClientGalleryProps = {
	images: {
		individual: {
			__typename?: "MediaItem";
			altText?: string | null;
			mediaItemUrl?: string | null;
			slug?: string | null;
		}[];
		wedding: {
			__typename?: "MediaItem";
			altText?: string | null;
			mediaItemUrl?: string | null;
			slug?: string | null;
		}[];
		hair:
			| {
					__typename?: "MediaItem";
					altText?: string | null;
					mediaItemUrl?: string | null;
					slug?: string | null;
			  }[]
			| undefined;
	};
};

const GalleryClient: React.FC<ClientGalleryProps> = ({ images }) => {
	const [activeCategory, setActiveCategory] = useState<
		"individual" | "wedding" | "hair"
	>("individual");
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [lightboxImage, setLightboxImage] = useState<string | null>(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleCategoryChange = (
		category: "individual" | "wedding" | "hair"
	) => {
		setActiveCategory(category);
		setCurrentIndex(0);
	};

	const openLightbox = (src: string, index: number) => {
		setLightboxImage(src);
		setCurrentIndex(index);
		setLightboxOpen(true);
	};

	const closeLightbox = () => {
		setLightboxOpen(false);
		setLightboxImage(null);
	};

	const nextImage = () => {
		if (
			images[activeCategory] &&
			images[activeCategory].length > 0 &&
			currentIndex < images[activeCategory].length - 1
		) {
			setCurrentIndex(currentIndex + 1);
		} else {
			closeLightbox();
		}
	};

	const prevImage = () => {
		if (
			images[activeCategory] &&
			images[activeCategory].length > 0 &&
			currentIndex > 0
		) {
			setCurrentIndex(currentIndex - 1);
		} else {
			closeLightbox();
		}
	};

	return (
		<section className="w-full flex flex-col justify-center">
			<div className='flex justify-center m-1 pb-5'>
				<button
					className={`px-4 py-2 w-[35%]  ${
						activeCategory === "individual"
							? " text-accent border-accent border-[1px]"
							: "border-[1px] border-transparent"
					}`}
					onClick={() => handleCategoryChange("individual")}
				>
					Makijaż Indywidualny
				</button>
				<button
					className={`px-4 py-2 w-[30%]  ${
						activeCategory === "wedding"
							? " text-accent border-accent border-[1px]"
							: "border-[1px] border-transparent"
					}`}
					onClick={() => handleCategoryChange("wedding")}
				>
					Makijaż Ślubny
				</button>
				<button
					className={`px-4 py-2 w-[30%]   ${
						activeCategory === "hair"
							? " text-accent border-accent border-[1px]"
							: "border-[1px] border-transparent"
					}`}
					onClick={() => handleCategoryChange("hair")}
				>
					Fryzury
				</button>
			</div>

			<div className='w-full min-h-[40svh] grid justify-center items-center grid-cols-2 md:max-w-[80%] mx-auto lg:grid-cols-4 lg:max-w-full '>
				{images[activeCategory]?.map((image, index) => (
					<div
						onClick={() => openLightbox(image.mediaItemUrl || "", index)}
						key={image.slug}
						className='m-1'
					>
						<Image
							src={image.mediaItemUrl || ""}
							alt={image.altText || ""}
							width={400}
							height={400}
							priority
							className='animate-scale-in-center lg:max-h-[320px] lg:object-cover'
						/>
					</div>
				))}
			</div>

			{lightboxOpen &&
				lightboxImage &&
				images[activeCategory] &&
				images[activeCategory].length > 0 && (
					<Lightbox
						imageUrl={lightboxImage}
						imageAlt=''
						currentIndex={currentIndex}
						totalImages={images[activeCategory]?.length || 0}
						onClose={closeLightbox}
						onNext={nextImage}
						onPrev={prevImage}
					/>
				)}
		</section>
	);
};

export default GalleryClient;
