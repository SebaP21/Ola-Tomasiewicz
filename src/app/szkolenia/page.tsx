import PageHeader from "@/components/PageHeader/PageHeader";
import HairTraining from "@/components/Training/HairTraining/HairTraining";
import IndividualTraining from "@/components/Training/IndividualTraining/IndividualTraining";
import MakeUpTraining from "@/components/Training/MakeupTraining/MakeupTraining";
import { SEO_CONTENT } from "@/graphql/SeoQuery";
import client from "../../../lib/apolloClient";
import { SeoContentQuery } from "../../../lib/generated/graphql";

const WorkShopsPage = () => {
	const pageId = 220;

	return (
		<>
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