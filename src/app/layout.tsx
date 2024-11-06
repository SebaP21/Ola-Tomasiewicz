import type { Metadata } from "next";
import "./globals.css";
import NavMobile from "@/components/NavMobile/NavMobile";
import CookieConsentBanner from "@/components/CookieConsent/CookieConsentBanner";
import Footer from "@/components/Footer/Footer";
import { Didact_Gothic } from "next/font/google";
import Script from "next/script";

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
				<meta
					name='google-site-verification'
					content={process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE}
				/>
			</head>
			<body className={didact.className}>
				<Script
					strategy='afterInteractive'
					src='https://www.googletagmanager.com/gtag/js?id=G-MM3BZWWSQB'
				/>
				<Script
					id='google-analytics'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MM3BZWWSQB', {
                page_path: window.location.pathname,
              });
            `,
					}}
				/>

				<NavMobile />
				{children}
				<Footer />
				<CookieConsentBanner />
			</body>
		</html>
	);
}
