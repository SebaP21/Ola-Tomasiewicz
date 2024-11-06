import Divider from "@/components/Divider/Divider";
import PageHeader from "@/components/PageHeader/PageHeader";
import StatuteBox from "@/components/statuteBox/StatuteBox";
import { SEO_CONTENT } from "@/graphql/SeoQuery";
import client from "../../../lib/apolloClient";
import { SeoContentQuery } from "../../../lib/generated/graphql";

const RegulationsPage = () => {
	const pageId = 146;

	return (
		<>
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
