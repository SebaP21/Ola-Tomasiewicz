import { gql } from "@apollo/client";

export const MASTERCLASS_MAKEUP_CONTENT = gql`
	query MasterClassMakeUpContent {
		szkoleniaTypeBy(szkoleniaTypeId: 194) {
			profMakeup {
				titleBox
				subtitleBox
				scopeoftrainingBox {
					elementListyBox
				}
				productlistBox {
					iloscTypowBox
					priceBox
					titleBox
				}
				opisDolnyBox
				ewentualneZdjecieBox {
					node {
						altText
						mediaItemUrl
						slug
					}
				}
				profMakeupGalleryBox {
					nodes {
						altText
						mediaItemUrl
						slug
					}
				}
			}
		}
	}
`;
