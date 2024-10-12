import { gql } from "@apollo/client";

export const INDIVIDUAL_CONTENT = gql`
	query IndividualPortfolioContent {
		makeUpIndividual {
			nodes {
				individualMakeup {
					individualMakeupBox {
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
