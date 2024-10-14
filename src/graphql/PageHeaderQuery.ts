import { gql } from "@apollo/client";

export const PAGE_HEADER_CONTENT = gql`
	query HeaderContent($pageId: Int!) {
		pageBy(pageId: $pageId) {
			pageHeaderPole {
				logo_header_box {
					node {
						altText
						mediaItemUrl
						slug
					}
				}
				headerPictureBox {
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
