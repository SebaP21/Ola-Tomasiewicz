import { PRICE_LIST_CONTENT } from "@/graphql/PriceListQuery";
import client from "../../../lib/apolloClient";
import { PriceListContentQuery } from "../../../lib/generated/graphql";
import Divider from "../Divider/Divider";

const PriceList = async () => {
	const { data } = await client.query<PriceListContentQuery>({
		query: PRICE_LIST_CONTENT,
	});

	const priceListBox = data.pageBy?.prizeListAcF?.pricelist;

	return (
		<section className='flex flex-col w-full items-center py-8'>
			<div className='flex flex-col py-8'>
				<h1 className='text-5xl mb-4'>Cennik usług</h1>
				<Divider width={100} />
			</div>
			<article className='w-[90%] flex flex-col items-center justify-center text-center'>
				{priceListBox?.map((item) => (
					<div
						className='my-4'
						key={item?.offertitle}
					>
						<h4 className='text-xl font-bold'>{item?.offertitle}</h4>
						<p className='text-lg font-bold text-accent font-oswald'>
							{item?.prize}
						</p>
					</div>
				))}
			</article>
		</section>
	);
};

export default PriceList;
