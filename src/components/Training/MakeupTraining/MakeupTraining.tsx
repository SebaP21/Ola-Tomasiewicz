import { MASTERCLASS_MAKEUP_CONTENT } from "@/graphql/MasterClassMakeUpQuery";
import client from "../../../../lib/apolloClient";
import { MasterClassMakeUpContentQuery } from "../../../../lib/generated/graphql";
import Divider from "@/components/Divider/Divider";
import Image from "next/image";

const MakeUpTraining = async () => {
	const { data } = await client.query<MasterClassMakeUpContentQuery>({
		query: MASTERCLASS_MAKEUP_CONTENT,
	});

	const title = data.szkoleniaTypeBy?.profMakeup?.titleBox;
	const subtitle = data.szkoleniaTypeBy?.profMakeup?.subtitleBox;
	const scopeOfTraining = data.szkoleniaTypeBy?.profMakeup?.scopeoftrainingBox;
	const productList = data.szkoleniaTypeBy?.profMakeup?.productlistBox;
	const summaryDescription = data.szkoleniaTypeBy?.profMakeup?.opisDolnyBox;
	const gallery = data.szkoleniaTypeBy?.profMakeup?.profMakeupGalleryBox?.nodes;

	return (
		<section
			id='z-makijazu'
			className='section w-full min-h-[100svh] flex flex-col items-center p-4 overflow-hidden lg:max-w-[950px] lg:mx-auto'
		>
			<div className='w-[90%] flex flex-col py-8'>
				<h1 className='text-4xl pb-6 text-center '>
					Szkolenia dla profesjonalistów
				</h1>
				<Divider width={100} />
			</div>
			<article className='w-[90%] flex flex-col gap-8'>
				<h2 className='text-3xl text-center '>{title}</h2>
				{subtitle && 
				<div className="text-text flex flex-col gap-2" dangerouslySetInnerHTML={{ __html: subtitle }} />
				}
				<div className="flex flex-col gap-8">
				
					<fieldset className="">
						<legend className='text-xl'>Zakres szkolenia</legend>
						<ul className='pt-2 pr-4 pb'>
							{scopeOfTraining?.map((type) => (
								<li
									key={type?.elementListyBox}
									className='text-text '
								>
									<span className='text-accent'>• </span>{" "}
									{type?.elementListyBox}
								</li>
							))}
						</ul>
					</fieldset>
				
				<div className='flex flex-col gap-6'>
					{productList?.map((product) => (
						<div
							key={`${product?.titleBox} ${product?.priceBox}`}
							className='flex flex-col gap-2'
						>
							<h4>{product?.titleBox}</h4>
							<div className='flex justify-between '>
								<p>{product?.iloscTypowBox}</p>
								<h5>{product?.priceBox}</h5>
							</div>
							<Divider width={100} />
						</div>
					))}
				</div>
				<div className="">
					{summaryDescription && 
					<div className="text-text flex flex-col gap-2" dangerouslySetInnerHTML={{ __html: summaryDescription }} />
					}
				</div>
				</div>
				<div className='grid grid-cols-2 gap-1 '>
					{gallery?.map((picture,index) => (
						<div
						key={index}
						className='overflow-hidden lg:max-h-[60svh]'>
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

export default MakeUpTraining;
