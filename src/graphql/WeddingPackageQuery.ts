import { gql } from "@apollo/client";

export const WEDDING_PACKAGE_CONTENT = gql`
	query WeddingPackageContent {
		pageBy(pageId: 18) {
			pakietSlubnyPole {
				uslugaBasicBox {
					nazwaUslugiBasicBox
				}
				cenaBasicBox
				czasTrwaniaBasicBox
				uslugaVipBox {
					nazwaUslugiVipBox
				}
				cenaVipBox
				czasTrwaniaVipBox
				pakietSlubnyOpisBox
				pakietSlubnyGaleriaBox {
					nodes {
						mediaItemUrl
						altText
						slug
					}
				}
				pakietSlubnyVipZdjecieBox {
					node {
						mediaItemUrl
						altText
						slug
					}
				}
			}
		}
	}
`;
