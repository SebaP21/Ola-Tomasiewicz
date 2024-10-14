import { HAIR_PORTFOLIO_CONTENT } from "@/graphql/HairQuery";
import { INDIVIDUAL_CONTENT } from "@/graphql/IndividualQuery";
import { WEDDING_CONTENT } from "@/graphql/WeddingQuery";

import {
	HairPortfolioContentQuery,
	IndividualPortfolioContentQuery,
	WeddingPortfolioContentQuery,
} from "../../../../lib/generated/graphql";
import GalleryClient from "./GalleryClient";
import client from "../../../../lib/apolloClient";

const Gallery = async () => {
	const { data: individual } =
		await client.query<IndividualPortfolioContentQuery>({
			query: INDIVIDUAL_CONTENT,
		});

	const { data: weddingData } =
		await client.query<WeddingPortfolioContentQuery>({
			query: WEDDING_CONTENT,
		});

	const { data: hairData } = await client.query<HairPortfolioContentQuery>({
		query: HAIR_PORTFOLIO_CONTENT,
	});

	const images = {
		individual:
			individual?.makeUpIndividual?.nodes[0].individualMakeup
				?.individualMakeupBox?.nodes || [],
		wedding:
			weddingData?.makeUpWedding?.nodes[0].weddingmakeup?.weddingmakeupgallery
				?.nodes || [],
		hair: hairData?.fryzury?.nodes[0].fruzurypole?.hairdoBox?.nodes,
	};
	return <GalleryClient images={images} />;
};

export default Gallery;
