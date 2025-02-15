"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../assets/pictures/ZNAK WODNY CZARNY_Obszar roboczy 1.png";

const AnimationMain = () => {
	const [animationState, setAnimationState] = useState("start");
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setAnimationState("end");
		}, 2000);

		const visibilityTimer = setTimeout(() => {
			setIsVisible(false);
		}, 3000);

		return () => {
			clearTimeout(timer);
			clearTimeout(visibilityTimer);
		};
	}, []);

	if (!isVisible) return null;

	return (
		<>
			<div className='fixed h-[100svh] w-full z-50 '>
				<div
					className={`w-1/2 h-full absolute top-0 left-0 z-50 bg-white ${
						animationState === "end" ? "animate-fade-out-left" : ""
					}`}
				>
					<div className='min-w-[1px] right-0 bottom-0 h-[0.5px] absolute bg-accent  animate-height'></div>
				</div>

				<div
					className={`w-1/2 h-full absolute top-0 right-0 z-50 bg-white  ${
						animationState === "end" ? "animate-fade-out-right" : ""
					}`}
				>
					<div className='min-w-[1px] left-0 h-[0.5px] absolute bg-accent  animate-height '></div>
				</div>

				<div
					className={`absolute inset-0 flex items-center justify-center z-50 transition-opacity duration-500 ${
						animationState === "end" ? "opacity-0" : ""
					}`}
				>
					<Image
						src={logo}
						alt='Logo'
						width={350}
						height={350}
					/>
				</div>
			</div>
			<style jsx>{`
				@keyframes fadeOutLeft {
					0% {
						transform: translateX(0);
						opacity: 1;
					}
					100% {
						transform: translateX(-100%);
						opacity: 0;
					}
				}

				@keyframes fadeOutRight {
					0% {
						transform: translateX(0);
						opacity: 1;
					}
					100% {
						transform: translateX(100%);
						opacity: 0;
					}
				}

				@keyframes height {
					0% {
						height: 1px;
					}
					100% {
						height: 100svh;
					}
				}

				.animate-height {
					animation: height 1s forwards;
				}

				.animate-width {
					animation: width 1s forwards;
					animation-delay: 1s;
				}

				.animate-fade-out-left {
					animation: fadeOutLeft 1s forwards;
				}

				.animate-fade-out-right {
					animation: fadeOutRight 1s forwards;
				}
			`}</style>
		</>
	);
};

export default AnimationMain;
