import PageHeader from "@/components/PageHeader/PageHeader";
import HairTraining from "@/components/Training/HairTraining/HairTraining";
import IndividualTraining from "@/components/Training/IndividualTraining/IndividualTraining";
import MakeUpTraining from "@/components/Training/MakeupTraining/MakeupTraining";
import { SEO_CONTENT } from "@/graphql/SeoQuery";
import client from "../../../lib/apolloClient";
import { SeoContentQuery } from "../../../lib/generated/graphql";
import Head from "next/head";

const WorkShopsPage = () => {
	const pageId = 220;

	return (
		<>
			<Head>
				<link
					rel='canonical'
					href='https://olatomasiewicz.pl/szkolenia'
				/>
			</Head>
			<PageHeader pageId={pageId} />
			<MakeUpTraining />
			<HairTraining />
			<IndividualTraining />
		</>
	);
};

export default WorkShopsPage;

export async function generateMetadata() {
	const { data } = await client.query<SeoContentQuery>({
		query: SEO_CONTENT,
		variables: { pageId: 220 },
	});

	const seo = data.pageBy?.seo;
	const ogImage = seo?.opengraphImage?.sourceUrl || "/logo-gold.png";

	return {
		title: seo?.title || "Szkolenia Ola Tomasiewicz",
		description:
			seo?.metaDesc ||
			"Profesjonalne szkolenia z makijażu i stylizacji fryzur od Oli Tomasiewicz.",
		openGraph: {
			title: seo?.opengraphTitle || "Szkolenia Ola Tomasiewicz",
			description:
				seo?.opengraphDescription ||
				"Dołącz do naszych szkoleń z makijażu i fryzur. Profesjonalne podejście i praktyczne umiejętności.",
			images: [
				{
					url: ogImage,
					width: 800,
					height: 800,
					alt: "Logo Ola Tomasiewicz",
				},
			],
			url: "https://olatomasiewicz.pl/szkolenia",
			siteName: "Ola Tomasiewicz",
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: seo?.opengraphTitle || "Szkolenia Ola Tomasiewicz",
			description:
				seo?.opengraphDescription ||
				"Dołącz do naszych szkoleń z makijażu i fryzur. Profesjonalne podejście i praktyczne umiejętności.",
			images: [ogImage],
		},
	};
}
