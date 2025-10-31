import PageHeader from "@/components/PageHeader/PageHeader";
import PriceList from "@/components/PriceList/PriceList";
import { SEO_CONTENT } from "@/graphql/SeoQuery";
import client from "../../../lib/apolloClient";
import { SeoContentQuery } from "../../../lib/generated/graphql";
import Head from "next/head";

import WeddingPackageShort from "@/components/WeddingPackage/WeddingPackageShort";

const PriceListPage = () => {
	const pageId = 18;

	return (
		<>
			<Head>
				<link
					rel='canonical'
					href='https://olatomasiewicz.pl/cennik'
				/>
			</Head>
			<PageHeader pageId={pageId} />
			<PriceList />
			<WeddingPackageShort/>
			
		</>
	);
};

export default PriceListPage;

export async function generateMetadata() {
	const { data } = await client.query<SeoContentQuery>({
		query: SEO_CONTENT,
		variables: { pageId: 18 },
	});

	const seo = data.pageBy?.seo;
	const ogImage = seo?.opengraphImage?.sourceUrl || "/logo-gold.png";

	return {
		title: seo?.title || "Cennik – Ola Tomasiewicz",
		description:
			seo?.metaDesc ||
			"Zapoznaj się z aktualnym cennikiem usług makijażu i stylizacji ślubnej.",
		openGraph: {
			title: seo?.opengraphTitle || "Cennik – Ola Tomasiewicz",
			description:
				seo?.opengraphDescription ||
				"Cennik usług makijażu i pakietów ślubnych.",
			images: [
				{
					url: ogImage,
					width: 800,
					height: 800,
					alt: "Logo Ola Tomasiewicz",
				},
			],
			url: "https://olatomasiewicz.pl/cennik",
			siteName: "Ola Tomasiewicz",
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: seo?.opengraphTitle || "Cennik – Ola Tomasiewicz",
			description:
				seo?.opengraphDescription ||
				"Cennik usług makijażu i pakietów ślubnych.",
			images: [ogImage],
		},
	};
}
