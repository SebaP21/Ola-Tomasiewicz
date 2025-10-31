import { PRICE_LIST_CONTENT } from "@/graphql/PriceListQuery";
import client from "../../../lib/apolloClient";
import { PriceListContentQuery } from "../../../lib/generated/graphql";
import Divider from "../Divider/Divider";
import Link from "next/link";

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
				<div className='max-w-[90%] py-12 flex flex-col '>
					<Link href={"/pakiet-slubny"}>
						<div className='cta border-[3px] border-accent hover:border-dark text-dark hover:text-accent transition min-w-[30svw] min-h-[30svw] flex justify-center items-center hover:bg-light sm:min-w-[25svw] sm:min-h-[25svw] md:min-w-[20svw] md:min-h-[20svw] lg:md:min-w-[210px] lg:min-h-[210px]'>
							<h4 className='text-xl'>Pakiety Ślubne</h4>
						</div>
					</Link>
				</div>
			</article>
		</section>
	);
};

export default PriceList;
