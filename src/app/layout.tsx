import type { Metadata } from "next";
import "./globals.css";
import NavMobile from "@/components/NavMobile/NavMobile";
import CookieConsentBanner from "@/components/CookieConsent/CookieConsentBanner";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
	title: "Ola Tomasiewicz Makeup Artist",
	description: "Projekt",
};

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
			<body>
				<NavMobile />
				{children}
				<Footer/>
				<CookieConsentBanner/>
			</body>
		</html>
	);
}
