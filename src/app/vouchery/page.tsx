import PageHeader from "@/components/PageHeader/PageHeader"
import Voucher from "@/components/Voucher/Voucher"
import client from "../../../lib/apolloClient"
import { SEO_CONTENT } from "@/graphql/SeoQuery"
import { SeoContentQuery } from "../../../lib/generated/graphql"
import Head from "next/head"







const VoucherPage = () => {

    const pageId = 143

    return(
        <>
		<Head>
				<link rel="canonical" href="https://olatomasiewicz.pl/vouchery" />
			</Head>
        <PageHeader pageId={pageId}/>
        <Voucher/>
        </>
    )
}


export default VoucherPage

export async function generateMetadata() {
	const { data } = await client.query<SeoContentQuery>({
		query: SEO_CONTENT,
		variables: { pageId: 143 },
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