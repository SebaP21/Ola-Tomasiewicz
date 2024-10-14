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
		<header
			className='w-full min-h-[100svh] bg-cover bg-center flex items-end justify-start'
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
	);
};

export default PageHeader;
