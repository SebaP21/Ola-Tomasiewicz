import PageHeader from "@/components/PageHeader/PageHeader";
import PriceList from "@/components/PriceList/PriceList";
import WeddingPackage from "@/components/WeddingPackage/WeddingPackage";
import { SEO_CONTENT } from "@/graphql/SeoQuery";
import client from "../../../lib/apolloClient";
import { SeoContentQuery } from "../../../lib/generated/graphql";
import Head from "next/head";

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
			<WeddingPackage />
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
