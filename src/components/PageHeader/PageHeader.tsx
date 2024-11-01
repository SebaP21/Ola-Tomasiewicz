import { PAGE_HEADER_CONTENT } from "@/graphql/PageHeaderQuery";
import client from "../../../lib/apolloClient";
import { HeaderContentQuery } from "../../../lib/generated/graphql";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

type PageHeaderProps = {
	pageId: number;
};

const PageHeader: FC<PageHeaderProps> = async ({ pageId }) => {
	const { data } = await client.query<HeaderContentQuery>({
		query: PAGE_HEADER_CONTENT,
		variables: { pageId },
	});

	const logo = data.pageBy?.pageHeaderPole?.logo_header_box?.node;
	const headerImage = data.pageBy?.pageHeaderPole?.headerPictureBox?.node;

	return (
		<>
			<header
				className='w-full min-h-[100svh] bg-cover bg-center flex items-end justify-start overflow-hidden md:hidden'
				style={{
					backgroundImage: headerImage?.mediaItemUrl
						? `url(${headerImage.mediaItemUrl})`
						: "none",
				}}
			>
				{logo && (
					<div className='max-w-[80%] animate-fade-right '>
						<Link href={"/"}>
							<Image
								src={logo?.mediaItemUrl || ""}
								alt={logo?.altText || "alt"}
								width={500}
								height={500}
							/>
						</Link>
					</div>
				)}
			</header>
			<header className='hidden w-full h-[100svh] overflow-hidden md:flex'>
				<div className='min-w-[30%] max-w-[30%]  bg-black flex flex-col justify-center items-end z-10 2xl:max-w-[50%] 2xl:min-w-[50%]'>
				{logo && (
					<div className='max-w-[100%] animate-fade-right '>
								<Link href={"/"}>
									<Image
										src={logo?.mediaItemUrl || ""}
										alt={logo?.altText || "alt"}
										width={500}
										height={500} />
								</Link>
							</div>
				)}
				</div>
				<div
					className='w-full   bg-cover '
					style={{
						backgroundImage: headerImage?.mediaItemUrl
							? `url(${headerImage.mediaItemUrl})`
							: "none",
					}}
				></div>
			</header>
		</>
	);
};

export default PageHeader;
