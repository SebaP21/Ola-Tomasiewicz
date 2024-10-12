import { gql } from "@apollo/client";

export const ABOUT_CONTENT = gql`
	query AboutContent {
		oMnie {
			nodes {
				aboutDescription {
					opisSekcjiOMnie
					pictureAbout {
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
