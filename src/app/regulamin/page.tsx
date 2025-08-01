import Divider from "@/components/Divider/Divider";
import PageHeader from "@/components/PageHeader/PageHeader";
import StatuteBox from "@/components/statuteBox/StatuteBox";
import { SEO_CONTENT } from "@/graphql/SeoQuery";
import client from "../../../lib/apolloClient";
import { SeoContentQuery } from "../../../lib/generated/graphql";
import Head from "next/head";

const RegulationsPage = () => {
	const pageId = 146;

	return (
		<>
			<Head>
				<link
					rel='canonical'
					href='https://olatomasiewicz.pl/regulamin'
				/>
			</Head>
			<PageHeader pageId={pageId} />
			<section className='flex justify-center items-center '>
				<div className='min-h-[70svh] w-[90%] flex flex-col items-center  py-8  sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[60%]'>
					<div className='w-[70%] pt-4 pb-8 '>
						<h1 className='text-4xl mb-4 text-center'>Regulamin usług</h1>
						<Divider width={100} />
					</div>
					<StatuteBox />
				</div>
			</section>
		</>
	);
};

export default RegulationsPage;

export async function generateMetadata() {
	const { data } = await client.query<SeoContentQuery>({
		query: SEO_CONTENT,
		variables: { pageId: 146 },
	});

	const seo = data.pageBy?.seo;
	const ogImage = seo?.opengraphImage?.sourceUrl || "/logo-gold.png";

	return {
		title: seo?.title || "Regulamin – Ola Tomasiewicz",
		description:
			seo?.metaDesc || "Zapoznaj się z regulaminem usług Ola Tomasiewicz.",
		openGraph: {
			title: seo?.opengraphTitle || "Regulamin usług – Ola Tomasiewicz",
			description:
				seo?.opengraphDescription ||
				"Sprawdź szczegółowe warunki korzystania z usług oferowanych przez Olę Tomasiewicz.",
			images: [
				{
					url: ogImage,
					width: 800,
					height: 800,
					alt: "Logo Ola Tomasiewicz",
				},
			],
			url: "https://olatomasiewicz.pl/regulamin",
			siteName: "Ola Tomasiewicz",
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: seo?.opengraphTitle || "Regulamin usług – Ola Tomasiewicz",
			description:
				seo?.opengraphDescription ||
				"Sprawdź szczegółowe warunki korzystania z usług oferowanych przez Olę Tomasiewicz.",
			images: [ogImage],
		},
	};
}
