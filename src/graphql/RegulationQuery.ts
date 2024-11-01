import { gql } from "@apollo/client";

export const REGULATION_CONTENT = gql`
	query RegulationContent {
		pageBy(pageId: 146) {
			title(format: RENDERED)
			serviceRegulationBox {
				regulationtitle
				serviceregulationdescriptionBox {
					dodajPunktDoRegulaminuBox
				}
			}
		}
	}
`;
