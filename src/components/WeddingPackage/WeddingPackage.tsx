// import { WEDDING_PACKAGE_CONTENT } from "@/graphql/WeddingPackageQuery";
// import client from "../../../lib/apolloClient";
// import { WeddingPackageContentQuery } from "../../../lib/generated/graphql";
// import Divider from "../Divider/Divider";

import Divider from "../Divider/Divider";

const WeddingPackage = async () => {
	// const { data } = await client.query<WeddingPackageContentQuery>({
	// 	query: WEDDING_PACKAGE_CONTENT,
	// });

	// const basicContent = data.pageBy?.pakietSlubnyPole?.uslugaBasicBox;
	// const basicTime = data.pageBy?.pakietSlubnyPole?.czasTrwaniaBasicBox;
	// const basicPrice = data.pageBy?.pakietSlubnyPole?.cenaBasicBox;

	// const vipContent = data.pageBy?.pakietSlubnyPole?.uslugaVipBox;
	// const vipTime = data.pageBy?.pakietSlubnyPole?.czasTrwaniaVipBox;
	// const vipPrice = data.pageBy?.pakietSlubnyPole?.cenaVipBox;
	// const vipBackground =
	// 	data.pageBy?.pakietSlubnyPole?.pakietSlubnyVipZdjecieBox;

	// const description = data.pageBy?.pakietSlubnyPole?.pakietSlubnyOpisBox;

	// const gallery = data.pageBy?.pakietSlubnyPole?.pakietSlubnyGaleriaBox;

	return (
		<>
			<section className='w-full flex flex-col min-h-[50svh] py-8 justify-center items-center'>
				<div className='w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[60%] flex flex-col py-8 md:py-12'>
					<h1 className='text-4xl pb-6 text-center '>Pakiet Ślubny</h1>
					<p className='text-center pb-4 text-xl'>
						Luksusowa dla kobiet, którym zależy na komforcie w dniu ślubu. Tego
						dnia jestem dla Panny Młodej na wyłączność i wszelka logistyka
						związana z dojazdami na makijaż i fryzurę przestaje być jej
						zmartwieniem. <br></br>W mojej filozofii pracy jest ważne, aby
						makijaż ślubny podkreślał naturalne piękno kobiety, był dopasowany
						do jej urody oraz stylizacji. Makijaż ten powinien być trwały,
						elegancki i wykonany kosmetykami najwyższej jakości.
					</p>
					{/* <Divider width={100} /> */}
				</div>

				<article className='w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[60%] py-8'>
					<div className='w-[50%] flex flex-col gap-2 '>
						<h2 className='text-3xl '>Pakiet Ślubny</h2>
						<p>BASIC</p>
						<Divider width={100} />
					</div>
					<div className=''>
						<ul className='flex flex-col gap-4 py-8'>
							{basic.map((item, index) => (
								<li key={index}>- {item}</li>
							))}
						</ul>
					</div>
					<div className='flex justify-between text-accent'>
						<p className='font-oswald text-lg text-accent'>
							Czas trwania: 4,5 h
						</p>
						<p className='font-oswald text-lg text-accent'>Cena: 1300 zł</p>
					</div>
				</article>
			</section>
			<section
				className='relative min-h-[60svh] py-8 w-full bg-fixed bg-cover bg-center flex justify-center items-center text-white'
				style={{
					backgroundImage: `url("/wedding2.jpeg")`,
				}}
			>
				<article className='w-[90%] z-10 flex flex-col justify-between sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[60%]'>
					<div className='w-[70%] flex flex-col gap-2 '>
						<h2 className='text-3xl'>Pakiet Ślubny VIP</h2>

						<Divider width={100} />
					</div>
					<div className=''>
						<ul className='flex flex-col gap-4 py-8'>
							{vip.map((item, index) => (
								<li key={index}>- {item}</li>
							))}
						</ul>
					</div>
					<div className='flex justify-between mt-4 '>
						<div>
							<Divider width={100} />
							<p className='font-oswald text-lg text-light mt-2'>
								Czas trwania: 6 godz.
							</p>
						</div>
						<div>
							<Divider width={100} />
							<p className='font-oswald text-lg text-light mt-2'>
								Cena: 1600 zł
							</p>
						</div>
					</div>
				</article>

				<div className='absolute bg-dark opacity-60  min-w-full min-h-[100%]'></div>
			</section>
			<section className='w-full flex pt-8 pb-12 justify-center items-center'>
				<article className='w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[60%]'>
					<div
						className='text-text flex flex-col gap-2'
						// dangerouslySetInnerHTML={{ __html: description }}
					>
						<p>
							Dojazd powyżej 30 km od Jaworzna wyceniany jest indywidualnie.
						</p>
						<p>
							Makijaż i fryzura próbna Panny Młodej to usługi odrębne, nie
							wchodzą w skład pakietu i są u mnie obowiązkowe. Wykonuję je w
							sezonie ślubnym od poniedziałku do czwartku w godz 9-18 w moim
							gabinecie przy ul. Jesionowej 11 w Jaworznie. W miesiącach
							zimowych (od listopada do marca) jest możliwość umówienia makijażu
							i fryzury próbnej również w weekend po wcześniejszym uzgodnieniu.
						</p>
						<p>
							Makijaż próbny to spotkanie, na którym ocenię stan Twojej skóry,
							dobiorę odpowiednią pielęgnację oraz podpowiem jakie zabiegi warto
							wykonać. Jest to też czas na omówienie całej stylizacji,
							inspiracji, możliwych rodzajów makijażu przy Twoim kształcie i
							budowie oka. Jeśli Panna Młoda nie miała wielu doświadczeń z
							makijażem profesjonalnym, tym bardziej makijaż próbny będzie dla
							niej cennym doświadczeniem.
						</p>
						<p>
							Cena makijażu próbnego to 300 zł, a fryzury próbnej 250 zł.
							<br></br>
							Ze względu na dużą ilość klientek, usługi próbne należy rezerwować
							z dużym wyprzedzeniem, najlepiej na 3-4 miesiące przed datą
							uroczystości.
						</p>
						<p>
							Warunkiem rezerwacji terminu jest wpłata zadatku w wysokości 300
							zł w ciągu 2 dni roboczych. Brak wpłaty zadatku skutkuje
							zwolnieniem terminu. Przed rezerwacją pakietu proszę o zapoznanie
							się z estetyką i stylem moich prac.
						</p>
					</div>
				</article>
			</section>
			{/* <section className='flex justify-center pb-4'>
				<div className='grid grid-cols-2 gap-1'>
					{gallery?.nodes.map((picture) => (
						<div key={picture.slug}>
							<Image
								src={picture.mediaItemUrl || ""}
								alt={picture.altText || ""}
								width={400}
								height={400}
								className=''
							/>
						</div>
					))}
				</div>
			</section> */}
		</>
	);
};

export default WeddingPackage;

const basic = ["3 usługi (makijaż lub fryzura)", "dojazd do 30km od Jaworzna"];
const vip = ["4 usługi (makijaż lub fryzura)", "dojazd do 30 km od Jaworzna"];
