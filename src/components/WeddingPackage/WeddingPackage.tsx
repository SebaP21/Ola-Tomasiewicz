import { WEDDING_PACKAGE_CONTENT } from "@/graphql/WeddingPackageQuery";
import client from "../../../lib/apolloClient";
import { WeddingPackageContentQuery } from "../../../lib/generated/graphql";
import Divider from "../Divider/Divider";
import Image from "next/image";

const WeddingPackage = async () => {
	const { data } = await client.query<WeddingPackageContentQuery>({
		query: WEDDING_PACKAGE_CONTENT,
	});

	const basicContent = data.pageBy?.pakietSlubnyPole?.uslugaBasicBox;
	const basicTime = data.pageBy?.pakietSlubnyPole?.czasTrwaniaBasicBox;
	const basicPrice = data.pageBy?.pakietSlubnyPole?.cenaBasicBox;

	const vipContent = data.pageBy?.pakietSlubnyPole?.uslugaVipBox;
	const vipTime = data.pageBy?.pakietSlubnyPole?.czasTrwaniaVipBox;
	const vipPrice = data.pageBy?.pakietSlubnyPole?.cenaVipBox;
	const vipBackground =
		data.pageBy?.pakietSlubnyPole?.pakietSlubnyVipZdjecieBox;

	const description = data.pageBy?.pakietSlubnyPole?.pakietSlubnyOpisBox;

	const gallery = data.pageBy?.pakietSlubnyPole?.pakietSlubnyGaleriaBox;

	return (
		<>
			<section className='w-full flex min-h-[50svh] py-8 justify-center items-center'>
				<article className='w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[60%]'>
					<div className='w-[50%] flex flex-col gap-2 '>
						<h2 className='text-3xl '>Pakiet Ślubny</h2>
						<p>BASIC</p>
						<Divider width={100} />
					</div>
					<div className=''>
						<ul className='flex flex-col gap-4 py-8'>
							{basicContent?.map((item, index) => (
								<li key={index}>{item?.nazwaUslugiBasicBox}</li>
							))}
						</ul>
					</div>
					<div className='flex justify-between text-accent'>
						<p className='font-oswald text-lg text-accent'>{basicTime}</p>
						<p className='font-oswald text-lg text-accent'>{basicPrice}</p>
					</div>
				</article>
			</section>
			<section
				className='relative min-h-[60svh] py-8 w-full bg-fixed bg-cover bg-center flex justify-center items-center text-white'
				style={{
					backgroundImage: vipBackground?.node.mediaItemUrl
						? `url(${vipBackground.node.mediaItemUrl})`
						: "none",
				}}
			>
				<article className='w-[90%] z-10 flex flex-col justify-between sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[60%]'>
					<div className='w-[70%] flex flex-col gap-2 '>
						<h2 className='text-3xl'>Pakiet Ślubny VIP</h2>

						<Divider width={100} />
					</div>
					<div className=''>
						<ul className='flex flex-col gap-4 py-8'>
							{vipContent?.map((item, index) => (
								<li key={index}>{item?.nazwaUslugiVipBox}</li>
							))}
						</ul>
					</div>
					<div className='flex justify-between mt-4 '>
						<div>
							<Divider width={100} />
							<p className='font-oswald text-lg text-light mt-2'>{vipTime}</p>
						</div>
						<div>
							<Divider width={100} />
							<p className='font-oswald text-lg text-light mt-2'>{vipPrice}</p>
						</div>
					</div>
				</article>

				<div className='absolute bg-dark opacity-60  min-w-full min-h-[100%]'></div>
			</section>
			<section className='w-full flex py-8 justify-center items-center'>
				<article className='w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[60%]'>
					<p>{description}</p>
				</article>
			</section>
			<section className="flex justify-center pb-4">
				<div className="grid grid-cols-2 gap-1">
					{gallery?.nodes.map((picture) => (
						<div key={picture.slug}>
							<Image
								src={picture.mediaItemUrl || ""}
								alt={picture.altText || ""}
								width={400}
								height={400}
								className=""
							/>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default WeddingPackage;
