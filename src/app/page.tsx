import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import CallToActionHome from "@/components/CTAHome/CtaHome";
import AnimationMain from "@/components/MainPageAnimation/Splashscreen";
import PageHeader from "@/components/PageHeader/PageHeader";
import Portfolio from "@/components/Portfolio/Portfolio";
import { SeoContentQuery } from "../../lib/generated/graphql";
import { SEO_CONTENT } from "@/graphql/SeoQuery";
import client from "../../lib/apolloClient";
import Head from "next/head";

export default function Home() {
	const pageId = 12;

	return (
		<>
			<Head>
				<link
					rel='canonical'
					href='https://olatomasiewicz.pl'
				/>
			</Head>
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

	return {
		title: seo?.title,
		description: seo?.metaDesc as string,
		openGraph: {
			image: seo?.opengraphImage?.sourceUrl as string,
			description: seo?.opengraphDescription as string,
			title: seo?.opengraphTitle as string,
		},
	};
}
