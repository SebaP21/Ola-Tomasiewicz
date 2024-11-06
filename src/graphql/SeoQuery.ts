import { gql } from "@apollo/client";

export const SEO_CONTENT = gql`
	query SeoContent($pageId: Int!) {
		pageBy(pageId: $pageId) {
			seo {
				metaDesc
				title
				opengraphDescription
				opengraphTitle
				opengraphImage {
					sourceUrl(size: LARGE)
				}
			}
		}
	}
`;
