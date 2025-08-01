import PageHeader from "@/components/PageHeader/PageHeader";
import Voucher from "@/components/Voucher/Voucher";
import client from "../../../lib/apolloClient";
import { SEO_CONTENT } from "@/graphql/SeoQuery";
import { SeoContentQuery } from "../../../lib/generated/graphql";
import Head from "next/head";

const VoucherPage = () => {
	const pageId = 143;

	return (
		<>
			<Head>
				<link
					rel='canonical'
					href='https://olatomasiewicz.pl/vouchery'
				/>
			</Head>
			<PageHeader pageId={pageId} />
			<Voucher />
		</>
	);
};

export default VoucherPage;

export async function generateMetadata() {
	const { data } = await client.query<SeoContentQuery>({
		query: SEO_CONTENT,
		variables: { pageId: 143 },
	});

	const seo = data.pageBy?.seo;
	const ogImage = seo?.opengraphImage?.sourceUrl || "/logo-gold.png";

	return {
		title: seo?.title || "Ola Tomasiewicz - Vouchery",
		description:
			seo?.metaDesc || "Sprawdź ofertę voucherów na makijaż i szkolenia",
		openGraph: {
			image: ogImage,
			description:
				seo?.opengraphDescription || "Podaruj voucher na makijaż lub szkolenie",
			title: seo?.opengraphTitle || "Vouchery Ola Tomasiewicz",
		},
		twitter: {
			card: "summary_large_image",
			title: seo?.opengraphTitle || "Vouchery Ola Tomasiewicz",
			description:
				seo?.opengraphDescription || "Podaruj voucher na makijaż lub szkolenie",
			images: [ogImage],
		},
	};
}
