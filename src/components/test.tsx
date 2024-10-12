import { ABOUT_CONTENT } from "@/graphql/AboutQuery";
import client from "../../lib/apolloClient";
import { AboutContentQuery } from "../../lib/generated/graphql";

const Test = async () => {
	const { data } = await client.query<AboutContentQuery>({
		query: ABOUT_CONTENT,
	});
	return (
		<section>
			<h1>{data.oMnie?.nodes[0].aboutDescription?.opisSekcjiOMnie}</h1>
		</section>
	);
};

export default Test;
