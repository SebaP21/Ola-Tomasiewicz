import { VOUCHER_CONTENT } from "@/graphql/VoucherQuery";
import client from "../../../lib/apolloClient";
import { VoucherContentQuery } from "../../../lib/generated/graphql";
import Divider from "../Divider/Divider";
import Image from "next/image";
import Link from "next/link";

const Voucher = async () => {
	const { data } = await client.query<VoucherContentQuery>({
		query: VOUCHER_CONTENT,
	});

	const voucherExamplePicture = data.pageBy?.voucherBox?.voucherpicture?.node;
	const voucherDescription = data.pageBy?.voucherBox?.voucherDescriptionBox;
	const voucherMainPicture = data.pageBy?.voucherBox?.voucherPictureHead?.node;

	return (
		<section className='flex flex-col w-full items-center py-8'>
			<div className='flex flex-col py-8 '>
				<h1 className='text-5xl mb-4'>Vouchery</h1>
				<Divider width={100} />
			</div>
			<article className='w-[90%] flex flex-col lg:flex-row lg:justify-evenly'>
				<div className="flex flex-col justify-center lg:max-w-[40%]">
					<div className='mb-8 flex justify-center '>
						<Image
							src={voucherExamplePicture?.mediaItemUrl || ""}
							alt={voucherExamplePicture?.altText || ""}
							width={600}
							height={600}
							className='lg:w-full lg:h-full lg:object-cover'
						/>
					</div>
					<div className='mb-8 flex flex-col items-start md:p-4  lg:p-0'>
						{voucherDescription && <div className="text-text flex flex-col gap-2" dangerouslySetInnerHTML={{ __html: voucherDescription }} />}
						<Link
							className='self-end'
							href={"/#kontakt"}
						>
							<button className=' px-6 py-2 border border-dark mt-8 transition-colors hover:bg-accent hover:text-light'>
								Kontakt
							</button>
						</Link>
					</div>
				</div>
				<div className="flex justify-center lg:min-w-[30%] lg:max-w-[40%]">
					<Image
						src={voucherMainPicture?.mediaItemUrl || ""}
						alt={voucherMainPicture?.altText || ""}
						width={700}
						height={700}
						className='lg:w-full lg:h-full lg:object-cover'
					/>
				</div>
			</article>
		</section>
	);
};

export default Voucher;
