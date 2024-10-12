import { gql } from "@apollo/client";

export const PAGE_HEADER_CONTENT = gql`
	query HeaderContent {
		pageBy(pageId: 12) {
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
