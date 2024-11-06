import { REGULATION_CONTENT } from "@/graphql/RegulationQuery";
import client from "../../../lib/apolloClient";
import { RegulationContentQuery } from "../../../lib/generated/graphql";

const StatuteBox = async () => {
	const { data } = await client.query<RegulationContentQuery>({
		query: REGULATION_CONTENT,
	});

	const regulationBox =
		data.pageBy?.serviceRegulationBox?.serviceregulationdescriptionBox;

	return (
		<div className="min-h-[50svh]">
			<ol className="list-decimal list-inside">
				{regulationBox?.map((item,index) => (
					<li 
					className="py-2"
					key={index}>{item?.dodajPunktDoRegulaminuBox}</li>
				))}
			</ol>
		</div>
	);
};
export default StatuteBox