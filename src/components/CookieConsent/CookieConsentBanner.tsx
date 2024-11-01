"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";

const CookieConsentBanner: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		const consent = Cookies.get("cookieConsent");
		if (!consent) {
			setIsAnimating(true);
			setTimeout(() => setIsVisible(true), 800);
		}
	}, []);

	const handleAccept = () => {
		Cookies.set("cookieConsent", "accepted", { expires: 7 });
		setIsVisible(false);
		setIsAnimating(false);
	};

	const handleDecline = () => {
		Cookies.set("cookieConsent", "declined", { expires: 7 });
		setIsVisible(false);
		setIsAnimating(false);
	};

	if (!isAnimating && !isVisible) return null;

	return (
		<div
			className={`fixed bottom-0 w-full bg-black bg-opacity-70 text-white p-4 flex flex-col justify-between items-center z-50 transition-transform duration-500 ${
				isVisible ? "translate-y-0" : "translate-y-full"
			}`}
		>
			<div>
				<p className='text-sm text-light text-center py-2 pb-4'>
					Ta strona używa plików cookies w celu poprawy komfortu użytkowania.
				</p>
			</div>
			<div className='flex gap-2 '>
				<button
					onClick={handleAccept}
					className='bg-transparent border transition-all border-light px-3 text-sm py-1 hover:bg-accent'
				>
					Akceptuję
				</button>
				<button
					onClick={handleDecline}
					className='bg-transparent border transition-all text-sm border-light px-3 p-1 hover:bg-accent'
				>
					Odrzucam
				</button>
				<button className='bg-transparent text-sm border transition-all border-light px-3 p-1 hover:bg-accent'>
					<Link href='/polityka-prywatnosci'>Polityka prywatności</Link>
				</button>
			</div>
		</div>
	);
};

export default CookieConsentBanner;
