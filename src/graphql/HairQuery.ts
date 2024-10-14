import { gql } from "@apollo/client";

export const HAIR_PORTFOLIO_CONTENT = gql`
	query HairPortfolioContent {
		fryzury {
			nodes {
				fruzurypole {
					hairdoBox {
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
