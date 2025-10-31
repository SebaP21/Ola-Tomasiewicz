import { WEDDING_PACKAGE_CONTENT } from "@/graphql/WeddingPackageQuery";
import client from "../../../lib/apolloClient";
import { WeddingPackageContentQuery } from "../../../lib/generated/graphql";
// import Divider from "../Divider/Divider";
import Image from "next/image";

const WeddingPackageShort = async () => {
	const { data } = await client.query<WeddingPackageContentQuery>({
		query: WEDDING_PACKAGE_CONTENT,
	});

	const gallery = data.pageBy?.pakietSlubnyPole?.pakietSlubnyGaleriaBox;

	return (
		<>
			<section className='flex justify-center pb-4'>
				<div className='grid grid-cols-2 gap-1'>
					{gallery?.nodes.map((picture) => (
						<div key={picture.slug}>
							<Image
								src={picture.mediaItemUrl || ""}
								alt={picture.altText || ""}
								width={400}
								height={400}
								className=''
							/>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default WeddingPackageShort;
