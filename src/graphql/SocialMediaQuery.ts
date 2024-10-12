import { gql } from "@apollo/client";

export const SOCIAL_CONTENT = gql`
	query SocialMediaContent {
		linkiSpoEcznoCiowe {
			nodes {
				socialMedia {
					socialMediaLink
				}
				title(format: RENDERED)
			}
		}
	}
`;
