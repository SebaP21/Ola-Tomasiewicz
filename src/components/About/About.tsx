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
		<section className='flex w-full min-h-[100svh] justify-center items-center'>
			<div className='max-w-[90%] flex flex-col py-10 gap-4'>
				<div className='w-[35%]'>
					<h1 className='text-4xl pb-4'>O mnie</h1>
					<Divider width={100} />
				</div>
				<article className='flex flex-col gap-4'>
					<div>
						<p>{aboutDescription}</p>
					</div>
					<div>
						<Image
							src={aboutPicture?.mediaItemUrl || ""}
							alt={aboutPicture?.altText || ""}
							width={500}
							height={500}
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
