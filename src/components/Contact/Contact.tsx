import Image from "next/image";

import Link from "next/link";
import { ContactContentQuery } from "../../../lib/generated/graphql";
import client from "../../../lib/apolloClient";
import { CONTACT_CONTENT } from "@/graphql/ContactQuery";
import ContactForm from "./ContactForm/ContactForm";
import Divider from "../Divider/Divider";
import phoneIcon from "../../assets/icons/telephone.png";
import mailIcon from "../../assets/icons/mail.png";
import adressIcon from "../../assets/icons/location.png";

const Contact = async () => {
	const { data } = await client.query<ContactContentQuery>({
		query: CONTACT_CONTENT,
	});

	const tel = data.pageBy?.contactSection?.phoneNumber;
	const email = data.pageBy?.contactSection?.eMailAdress;
	const adress = data.pageBy?.contactSection?.adres;

	return (
		<section
			id='kontakt'
			className='section min-h-[70svh] items-center justify-center w-full flex flex-col pt-4 pb-8 lg:items-stretch '
		>
			<div className='flex flex-col max-w-[90%] items-center'>
				<div className='flex flex-col gap-4 my-8 w-[50%] items-center '>
					<h2 className='text-5xl'>Kontakt</h2>
					<Divider width={100} />
				</div>
				<div className='flex flex-col justify-center items-center gap-2'>
					<h4 className='text-2xl'>Zapraszam do kontaktu</h4>
					<p className='text-center'>
						Skorzystaj z formularza kontaktowego i wyślij wiadomość.
					</p>
				</div>
				<div className="flex flex-col w-full lg:flex-row lg:justify-evenly">
					<div className='mt-4 flex flex-col '>
						<Link href={`tel:${tel}`}>
							<div className='flex flex-col justify-center items-center cursor-pointer min-h-[15svh] gap-3 transition-all hover:scale-105'>
								<Image
									src={phoneIcon}
									alt={"phone-icon"}
									width={40}
									height={40}
								/>
								<h5 className='uppercase'>Numer telefonu</h5>
								<h6 className='text-accent text-bold'>{tel}</h6>
							</div>
						</Link>
						<Link href={`mailto:${email}`}>
							<div className='flex flex-col justify-center items-center cursor-pointer min-h-[15svh] gap-3 transition-all hover:scale-105'>
								<Image
									src={mailIcon}
									alt={"mail-icon"}
									width={40}
									height={40}
								/>
								<h5 className='uppercase'>e-mail</h5>
								<h6 className='text-accent text-bold '>{email}</h6>
							</div>
						</Link>

						<div className='flex flex-col justify-center items-center min-h-[15svh] gap-3'>
							<Image
								src={adressIcon}
								alt={"mail-icon"}
								width={50}
								height={50}
							/>
							<h5 className='uppercase'>Adres</h5>
							<h6 className='text-accent text-bold '>{adress}</h6>
						</div>
					</div>

					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default Contact;
