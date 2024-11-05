"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../assets/pictures/ZNAK WODNY CZARNY_Obszar roboczy 1.png"; // Upewnij się, że ścieżka jest poprawna


const AnimationMain = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [isFadingOut, setIsFadingOut] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsFadingOut(true); // Rozpocznij efekt zanikania
			// Kolejny timer, aby całkowicie usunąć komponent po zaniku
			setTimeout(() => setIsVisible(false), 300); // Zmniejszone do 0.3s dla efektu zanikania
		}, 2000); // 1s dla animacji linii + 0.5s dla animacji tła

		return () => clearTimeout(timer); // Czyszczenie timera przy demontażu komponentu
	}, []);

	if (!isVisible) return null; // Wyłącz komponent po zakończeniu zanikania

	return (
		<div
			className={`min-w-full min-h-[100svh] top-0 left-0 sticky bg-white flex justify-center items-center z-50 overflow-hidden transition-opacity duration-500 ${
				isFadingOut ? "opacity-0" : "opacity-100"
			}`}
		>
			<div
				className={`relative min-h-[100svh] flex justify-center items-center transition-transform duration-500`}
			>
				<Image
					src={logo}
					alt={"logo"}
					width={300}
					height={300}
				/>

				
				<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[2px] bg-accent animate-line'></div>
			</div>

			
			<div className='absolute inset-0 bg-black animate-background opacity-0'></div>

			<style jsx>{`
				/* Animacja linii przechodzącej od dołu do góry */
				@keyframes line {
					0% {
						height: 0;
					}
					100% {
						height: 100%;
					}
				}

				/* Animacja rozszerzającego się tła */
				@keyframes background {
					0% {
						transform: scaleX(0);
						opacity: 0;
					}
					100% {
						transform: scaleX(1);
						opacity: 1;
					}
				}

				/* Klasy Tailwind do animacji */
				.animate-line {
					animation: line 0.75s ease-in forwards; /* Skrócone do 0.75s */
				}
				.animate-background {
					animation: background 0.5s ease-in 0.75s forwards; /* Skrócone do 0.5s z opóźnieniem 0.75s */
					transform-origin: center;
				}
			`}</style>
		</div>
	);
};

export default AnimationMain;
