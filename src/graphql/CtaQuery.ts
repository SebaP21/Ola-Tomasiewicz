import { gql } from "@apollo/client";

export const CTA_CONTENT = gql`
	query CtaContent {
		pageBy(pageId: 12) {
			cta {
				calltoactionpicture {
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
