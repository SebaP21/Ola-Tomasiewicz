import { gql } from "@apollo/client";

export const MASTERCLASS_HAIR_CONTENT = gql`
	query MasterClassHairContent {
		szkoleniaTypeBy(szkoleniaTypeId: 195) {
			professionalHair {
				czasTrwaniaBox
				descriptionBox
				opisDolnyBox
				productListBox {
					iloscTypowBox
					nazwaProduktuBox
					priceBox
				}
				titleBox
				profHairGalleryBox {
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
