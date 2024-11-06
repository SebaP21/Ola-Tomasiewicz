import client from "../../../../lib/apolloClient";
import { MasterClassHairContentQuery } from "../../../../lib/generated/graphql";
import Divider from "@/components/Divider/Divider";
import Image from "next/image";
import { MASTERCLASS_HAIR_CONTENT } from "@/graphql/MasterClassHairQuery";

const HairTraining = async () => {
	const { data } = await client.query<MasterClassHairContentQuery>({
		query: MASTERCLASS_HAIR_CONTENT,
	});

	const title = data.szkoleniaTypeBy?.professionalHair?.titleBox;
	const subtitle = data.szkoleniaTypeBy?.professionalHair?.descriptionBox;
	const productList = data.szkoleniaTypeBy?.professionalHair?.productListBox;
	const summaryDescription =
		data.szkoleniaTypeBy?.professionalHair?.opisDolnyBox;
	const gallery =
		data.szkoleniaTypeBy?.professionalHair?.profHairGalleryBox?.nodes;
	
	return (
		<section
			id='ze-stylizacji-fryzur'
			className='section w-full min-h-[100svh] flex flex-col items-center p-4 overflow-hidden lg:max-w-[950px] lg:mx-auto'
		>
			<article className='w-[90%] flex flex-col gap-8'>
				<div className='w-full flex flex-col gap-4'>
					<Divider width={100} />
					<h2 className='text-3xl text-center pt-4'>{title}</h2>
				</div>
				{subtitle && 
				<div className="text-text flex flex-col gap-2" dangerouslySetInnerHTML={{ __html: subtitle }} />
				}
				<div className='flex flex-col gap-6'>
					{productList?.map((product,index) => (
						<div
							key={index}
							className='flex flex-col gap-2'
						>
							<h4>{product?.nazwaProduktuBox}</h4>
							<div className='flex justify-between'>
								<p>{product?.iloscTypowBox}</p>
								<h5>{product?.priceBox}</h5>
							</div>
							<Divider width={100} />
						</div>
					))}
				</div>
				<div>
					{summaryDescription && <div className="text-text flex flex-col gap-2" dangerouslySetInnerHTML={{ __html: summaryDescription }} />}
				</div>
				<div className='grid grid-cols-2 gap-1 '>
					{gallery?.map((picture) => (
						<div 
						key={picture.mediaItemUrl}
						className='overflow-hidden max-h-[60svh]'>
							<Image
								src={picture.mediaItemUrl || ""}
								alt={picture.altText || ""}
								width={1000}
								height={1000}
								className='w-full h-full object-cover '
							/>
						</div>
					))}
				</div>
			</article>
		</section>
	);
};

export default HairTraining;
