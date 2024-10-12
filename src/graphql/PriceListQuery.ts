import { gql } from "@apollo/client";

export const PRICE_LIST_CONTENT = gql`
	query PriceListContent {
		pageBy(pageId: 18) {
			prizeListAcF {
				pricelist {
					offertitle
					prize
				}
			}
		}
	}
`;
