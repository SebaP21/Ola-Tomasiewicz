import { gql } from "@apollo/client";

export const LOGO_CONTENT = gql`
	query LogoContent {
		allLogo {
			nodes {
				logoBox {
					logoNav {
						node {
							altText
							mediaItemUrl
							slug
						}
					}
					logo_footer {
						node {
							altText
							mediaItemUrl
							slug
						}
					}
				}
			}
		}
	}
`;
