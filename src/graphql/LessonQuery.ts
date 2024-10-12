import { gql } from "@apollo/client";

export const LESSON_CONTENT = gql`
	query PriceListLessonContent {
		pageBy(pageId: 18) {
			individualMasterclass {
				cena
				czasTrwania
				mcdescriptions
				podtytul
				tytulSzkolenia
				sectionpicture {
					node {
						altText
						mediaItemUrl
						slug
					}
				}
			}
		}
	}
`;
