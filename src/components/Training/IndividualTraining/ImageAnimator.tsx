"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";

type MediaItem = {
	__typename?: "MediaItem";
	altText?: string | null;
	mediaItemUrl?: string | null;
	slug?: string | null;
};

type AnimatedGalleryProps = {
	gallery: MediaItem[] | undefined;
};

const AnimatedGallery: React.FC<AnimatedGalleryProps> = ({ gallery }) => {
	const [shadowIndex, setShadowIndex] = useState<number>(0);
	const [visibleIndexes, setVisibleIndexes] = useState<Set<number>>(new Set());
	const [hoverIndex, setHoverIndex] = useState<number | null>(null); // stan śledzenia hovera lub kliknięcia
	const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

	// Zmieniamy cień co 2 sekundy, jeśli nie ma hovera lub kliknięcia
	useEffect(() => {
		if (hoverIndex !== null) return; // Zatrzymaj animację, jeśli jest hover lub klik na zdjęciu

		const interval = setInterval(() => {
			setShadowIndex((prevIndex) => (prevIndex + 1) % 3);
		}, 2000);

		return () => clearInterval(interval);
	}, [hoverIndex]);

	// Funkcja do obserwowania widoczności elementów
	const observeImages = useCallback(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const index = Number(entry.target.getAttribute("data-index"));
					if (entry.isIntersecting) {
						setVisibleIndexes((prev) => new Set(prev).add(index));
						observer.unobserve(entry.target); // Przestajemy obserwować widoczny element
					}
				});
			},
			{ threshold: 0.5 }
		);

		imageRefs.current.forEach((ref) => {
			if (ref) observer.observe(ref);
		});

		return () => observer.disconnect();
	}, []);

	// Uruchamiamy obserwowanie zdjęć po załadowaniu galerii
	useEffect(() => {
		if (gallery && gallery.length > 0) {
			observeImages();
		}
	}, [gallery, observeImages]);

	// Funkcja do obsługi kliknięć na mobilnych
	const handleImageClick = (index: number) => {
		setHoverIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	return (
		<div className='grid grid-cols-1 gap-1 lg:grid-cols-2'>
			{gallery?.map((picture, index) => (
				<div
					key={index}
					className={`overflow-hidden relative transition-opacity duration-1000 ${
						visibleIndexes.has(index) ? "opacity-100" : "opacity-0"
					}`}
					data-index={index}
					ref={(el) => { imageRefs.current[index] = el }}
					onMouseEnter={() => setHoverIndex(index)} // włączamy hover na zdjęcie
					onMouseLeave={() => setHoverIndex(null)} // wyłączamy hover na zdjęcie
					onClick={() => handleImageClick(index)} // obsługa kliknięcia na mobilnych
				>
					<Image
						src={picture.mediaItemUrl || ""}
						alt={picture.altText || ""}
						width={1200}
						height={1200}
						className='w-full h-full object-cover'
					/>

					{/* Animowany cień, tylko jeśli nie ma hovera lub kliknięcia */}
					<div
						className={`absolute inset-0 shadow-layer ${
							shadowIndex === 0 && hoverIndex !== index ? "opacity-100" : "opacity-0"
						} shadow-right`}
					></div>
					<div
						className={`absolute inset-0 shadow-layer ${
							shadowIndex === 1 && hoverIndex !== index ? "opacity-100" : "opacity-0"
						} shadow-left`}
					></div>
					<div
						className={`absolute inset-0 shadow-layer ${
							shadowIndex === 2 && hoverIndex !== index ? "opacity-100" : "opacity-0"
						} no-shadow`}
					></div>
				</div>
			))}
			<style jsx>{`
				.shadow-layer {
					transition: opacity 1.5s ease;
				}
				.shadow-right {
					background: linear-gradient(
						to left,
						rgba(0, 0, 0, 0.85) 45%,
						transparent 100%
					);
				}
				.shadow-left {
					background: linear-gradient(
						to right,
						rgba(0, 0, 0, 0.85) 45%,
						transparent 100%
					);
				}
				.no-shadow {
					background: none;
				}
			`}</style>
		</div>
	);
};

export default AnimatedGallery;
