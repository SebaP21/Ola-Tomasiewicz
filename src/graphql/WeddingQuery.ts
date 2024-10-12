import { gql } from "@apollo/client";

export const WEDDING_CONTENT = gql`
	query WeddingPortfolioContent {
		makeUpWedding {
			nodes {
				weddingmakeup {
					weddingmakeupgallery {
						nodes {
							altText
							mediaItemUrl
							slug
						}
					}
				}
			}
		}
	}
`;
