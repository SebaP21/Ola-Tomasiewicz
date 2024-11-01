import { gql } from "@apollo/client";

export const PRIVATE_LESSON_CONTENT = gql`
	query PrivateLessonContent {
		szkoleniaTypeBy(szkoleniaTypeId: 193) {
			individualMasterclass {
				tytulSzkolenia
				podtytul
				masterclassdescription {
					listElementBox
				}
				czasTrwania
				cena
				individualLessonGalleryBox {
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
