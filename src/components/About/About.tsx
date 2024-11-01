import { ABOUT_CONTENT } from "@/graphql/AboutQuery";
import client from "../../../lib/apolloClient";
import { AboutContentQuery } from "../../../lib/generated/graphql";
import Divider from "../Divider/Divider";
import Image from "next/image";

const About = async () => {
	const { data } = await client.query<AboutContentQuery>({
		query: ABOUT_CONTENT,
	});

	const aboutPicture =
		data.oMnie?.nodes[0].aboutDescription?.pictureAbout?.node;
	const aboutDescription =
		data.oMnie?.nodes[0].aboutDescription?.opisSekcjiOMnie;

	return (
		<section className='flex w-full min-h-[100svh] xl:min-h-[70svh] justify-center items-center'>
			<div className='max-w-[90%] flex flex-col py-10 gap-4 md:max-w-[70%] xl:max-w-[70%]'>
				<div className='w-[35%] md:self-center'>
					<h1 className='text-4xl pb-4 md:text-center'>O mnie</h1>
					<Divider width={100} />
				</div>
				<article className='flex flex-col gap-4 xl:flex-row xl:gap-8 xl:py-8'>
					<div className="xl:w-[40%] xl:order-2">
						<p>{aboutDescription}</p>
					</div>
					<div
					className="lg:max-w-[50svh] lg:mx-auto xl:w-[50%] xl-order-1"
					>
						<Image
							src={aboutPicture?.mediaItemUrl || ""}
							alt={aboutPicture?.altText || ""}
							width={1000}
							height={1000}
							className='w-full h-full object-cover'
						/>
					</div>
				</article>
				<div className='w-full flex justify-center'>
					<Divider width={50} />
				</div>
			</div>
		</section>
	);
};

export default About;
