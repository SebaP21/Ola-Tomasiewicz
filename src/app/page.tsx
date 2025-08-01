import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import CallToActionHome from "@/components/CTAHome/CtaHome";
import AnimationMain from "@/components/MainPageAnimation/Splashscreen";
import PageHeader from "@/components/PageHeader/PageHeader";
import Portfolio from "@/components/Portfolio/Portfolio";
import { SeoContentQuery } from "../../lib/generated/graphql";
import { SEO_CONTENT } from "@/graphql/SeoQuery";
import client from "../../lib/apolloClient";

export default function Home() {
	const pageId = 12;

	return (
		<>
			<AnimationMain />
			<PageHeader pageId={pageId} />
			<About />
			<Portfolio />
			<CallToActionHome />
			<Contact />
		</>
	);
}

export async function generateMetadata() {
	const { data } = await client.query<SeoContentQuery>({
		query: SEO_CONTENT,
		variables: { pageId: 12 },
	});

	const seo = data.pageBy?.seo;

	const ogImage = seo?.opengraphImage?.sourceUrl || "/logo-gold.png";

	return {
		title: seo?.title || "Ola Tomasiewicz Makeup Artist",
		description: seo?.metaDesc || "Makijaż, szkolenia, stylizacja",
		openGraph: {
			title: seo?.opengraphTitle || "Ola Tomasiewicz Makeup Artist",
			description:
				seo?.opengraphDescription || "Zobacz ofertę szkoleń i makijażu",
			images: [
				{
					url: ogImage,
					width: 800,
					height: 800,
					alt: "Logo Ola Tomasiewicz",
				},
			],
			url: "https://olatomasiewicz.pl",
			siteName: "Ola Tomasiewicz",
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: seo?.opengraphTitle || "Ola Tomasiewicz Makeup Artist",
			description:
				seo?.opengraphDescription || "Zobacz ofertę szkoleń i makijażu",
			images: [ogImage],
		},
	};
}
