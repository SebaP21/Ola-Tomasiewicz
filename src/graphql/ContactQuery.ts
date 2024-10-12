import { gql } from "@apollo/client";

export const CONTACT_CONTENT = gql`
	query ContactContent {
		pageBy(pageId: 20) {
			contactSection {
				eMailAdress
				phoneNumber
				adres
			}
		}
	}
`;
