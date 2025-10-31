import { CTA_CONTENT } from "@/graphql/CtaQuery";
import client from "../../../lib/apolloClient";
import { CtaContentQuery } from "../../../lib/generated/graphql";
import Link from "next/link";

const CallToActionHome = async () => {
	const { data } = await client.query<CtaContentQuery>({
		query: CTA_CONTENT,
	});

	const backgroundImage = data.pageBy?.cta?.calltoactionpicture?.node;

	return (
		<section
			className='relative min-h-[75svh] sm:min-h-[80svh] lg:min-h-[70svh] w-full bg-cover bg-center flex justify-center items-center z-0 bg-fixed'
			style={{
				backgroundImage: backgroundImage?.mediaItemUrl
					? `url(${backgroundImage.mediaItemUrl})`
					: "none",
			}}
		>
			<div className='max-w-[90%] min-h-[50svh] flex flex-col justify-evenly gap-8 z-10 py-4 lg:flex-row lg:justify-center lg:items-center'>
				<Link href={"/cennik"}>
					<div className='cta border-[3px] hover:border-transparent text-light hover:text-dark transition min-w-[30svw] min-h-[30svw] flex justify-center items-center hover:bg-light sm:min-w-[25svw] sm:min-h-[25svw] md:min-w-[20svw] md:min-h-[20svw] lg:md:min-w-[210px] lg:min-h-[210px]'>
						<h4 className='text-xl'>Cennik</h4>
					</div>
				</Link>
				<Link href={"/pakiet-slubny"}>
					<div className='cta border-[3px] hover:border-transparent text-light hover:text-dark transition min-w-[30svw] min-h-[30svw] flex justify-center items-center hover:bg-light sm:min-w-[25svw] sm:min-h-[25svw] md:min-w-[20svw] md:min-h-[20svw] lg:md:min-w-[210px] lg:min-h-[210px]'>
						<h4 className='text-xl'>Pakiet Ślubny</h4>
					</div>
				</Link>
				<Link href={"/szkolenia"}>
					<div className='cta border-[3px] hover:border-transparent text-light hover:text-dark transition min-w-[30svw] min-h-[30svw] flex justify-center items-center hover:bg-light sm:min-w-[25svw] sm:min-h-[25svw] md:min-w-[20svw] md:min-h-[20svw] lg:md:min-w-[210px] lg:min-h-[210px]'>
						<h4 className='text-xl'>Szkolenia</h4>
					</div>
				</Link>
				<Link href={"/vouchery"}>
					<div className='cta border-[3px] hover:border-transparent text-light hover:text-dark transition min-w-[30svw] min-h-[30svw] flex justify-center items-center hover:bg-light sm:min-w-[25svw] sm:min-h-[25svw] md:min-w-[20svw] md:min-h-[20svw] lg:md:min-w-[210px] lg:min-h-[210px]'>
						<h4 className='text-xl'>Vouchery</h4>
					</div>
				</Link>
			</div>

			<div className='absolute bg-dark opacity-40 min-w-full min-h-[100%] z-0'></div>
		</section>
	);
};

export default CallToActionHome;
