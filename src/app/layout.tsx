import type { Metadata } from "next";
import "./globals.css";
import NavMobile from "@/components/NavMobile/NavMobile";
import CookieConsentBanner from "@/components/CookieConsent/CookieConsentBanner";
import Footer from "@/components/Footer/Footer";
import { Didact_Gothic } from "next/font/google";

export const metadata: Metadata = {
	title: "Ola Tomasiewicz Makeup Artist",
	description: "Projekt",
};

const didact = Didact_Gothic({
	subsets: ["latin"],
	weight: "400",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pl'>
			<head>
				
				<link
					href='https://fonts.googleapis.com/css2?family=Didact+Gothic:wght@400&family=Oswald:wght@400&display=swap'
					rel='stylesheet'
				/>
			</head>
			<body className={didact.className}>
				<NavMobile />
				{children}
				<Footer/>
				<CookieConsentBanner/>
			</body>
		</html>
	);
}
