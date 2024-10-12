import { gql } from "@apollo/client";

export const VOUCHER_CONTENT = gql`
	query VoucherContent {
		pageBy(pageId: 143) {
			voucherBox {
				pagetitle
				voucherDescriptionBox
				voucherPictureHead {
					node {
						altText
						mediaItemUrl
						slug
					}
				}
				voucherpicture {
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
