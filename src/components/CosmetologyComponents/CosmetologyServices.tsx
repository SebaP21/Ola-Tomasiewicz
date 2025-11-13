const CosmetologyServices = () => {
	return (
		<section
			id='lekcja-makijazu'
			className='section w-full min-h-[100svh] flex flex-col items-center py-8 md:py-20  overflow-hidden lg:max-w-[950px] lg:mx-auto'
		>
			<div className='w-[90%] flex flex-col py-8 md:py-12'>
				<h1 className='text-4xl pb-6 text-center '>Kosmetologia</h1>
				<p className='text-center pb-4 text-lg'>
					Zabiegi pielęgnacyjne na twarz. Na pierwszej wizycie dobieram klientce
					dedykowaną pielęgnację domową, aby wzmocnić i podtrzymać efekty
					zabiegu. Właściwa pielęgnacja domowa to podstawa zdrowej i pięknej
					skóry. Zabiegi, które oferuję, są świetnym przygotowaniem skóry przed
					ważnymi uroczystościami.
				</p>
				{/* <Divider width={100} /> */}
			</div>
			<article className='w-[90%] flex flex-col gap-8 py-2 md:py-8'>
				<div>
					<fieldset>
						<legend className='md:text-xl'>Oczyszczanie Wodorowe</legend>
						<p className='py-6 pr-4'>
							Zabieg polegający na wtłaczaniu pod ciśnieniem cząsteczek wodoru
							oraz mieszanki kwasów w głąb skóry, aby ją oczyścić, usunąć
							zaskórniki i nadmiar sebum oraz zneutralizować wolne rodniki.
							Zabieg jest bezbolesny, nieinwazyjny i bezpieczny dla każdego typu
							cery.
						</p>
						{/* <p className=''>
							<strong>Przebieg zabiegu:</strong> demakijaż + tonizacja +{" "}
							<br></br>peeling na bazie kwasu mlekowego + serum + <br></br>{" "}
							masaż kosmetyczny (15-20min) + maska + krem
						</p>
						<p className='py-4'>
							<strong>Efekty zabiegu:</strong> nawilżenie, odżywienie i
							wygładzenie skóry.
						</p> */}
					</fieldset>
				</div>

				<div className='flex self-end'>
					{/* <div className='animate-fade-right'>
						<h3 className=''>Czas: 1h</h3>
					</div> */}
					<div className='animate-fade-left '>
						<h3 className=''> Cena: 250zł</h3>
					</div>
				</div>
			</article>
			<article className='w-[90%] flex flex-col gap-8 py-8 '>
				<div>
					<fieldset>
						<legend className='md:text-xl'>Zabieg Nawilżający</legend>
						<p className='py-6 pr-4'>
							Głęboko nawilża, odżywia i regeneruje barierę hydrolipidową.
							Zastosowanie kawitacji oraz dedykowanego peelingu kwasowego
							wygładza skórę i normalizuje proces rogowacenia naskórka. Zabieg
							wieńczy masaż relaksacyjny twarzy.
						</p>
						{/* <p className=''>
							<strong>Przebieg zabiegu:</strong> demakijaż + tonizacja +{" "}
							<br></br>maska Neuro Gaba + peeling Neuro Gaba + <br></br>serum +
							krem
						</p>
						<p className='py-4'>
							<strong>Efekty zabiegu:</strong> natychmiastowe wygładzenie
							zmarszczek, ujędrnienie i nawilżenie skóry, rozluźnienie mięśni
							mimicznych.
						</p> */}
					</fieldset>
				</div>

				<div className='flex self-end'>
					{/* <div className='animate-fade-right'>
						<h3 className=''>Czas: 1:20 h</h3>
					</div> */}
					<div className='animate-fade-left'>
						{/* <h3 className=''>
							{" "}
							Cena: 250 zł (twarz),<br></br> 290 zł (twarz + szyja)
						</h3> */}
						<h3 className=''> Cena: 250zł</h3>
					</div>
				</div>
			</article>

			<article className='w-[90%] flex flex-col gap-8 py-4 md:py-8'>
				<div>
					<fieldset>
						<legend className='md:text-xl'>Zabieg ANTI ACNE</legend>
						<p className='py-6 pr-4'>
							Zabieg ANTI ACNE dedykowany skórze tłustej, trądzikowej i
							problematycznej.<br></br> Zmniejsza powstawanie niedoskonałości,
							działa antybakteryjnie i przeciwzapalnie. Pomaga regulować
							wydzielanie sebum, zwęża pory oraz rozjaśnia przebarwienia.
							Peeling na bazie kwasu szikimowego złuszcza wierzchnią warstwę
							naskórka, dzięki czemu skóra po zabiegu jest gładka, miękka i miła
							w dotyku.
						</p>
						{/* <p className='pr-4'>
							<strong>Przebieg zabiegu: </strong>
							demakijaż + tonizajca + <br></br> peeling kawitacyjny + peeling na
							bazie kwasu szikimowego + maska + serum + krem.
						</p>
						<p className='py-4 pr-4'>
							<strong>Efekty zabiegu:</strong> regulacja mikrobiomu skóry,
							regulacja wydzielania sebum, wyciszenie stanów zapalnych,
							stopniowe usunięcie zaskórnków. <br></br>Najlepsze rezultaty
							przynosi seria min. 4 zabiegów co 10-14 dni.
						</p> */}
					</fieldset>
				</div>

				<div className='flex self-end'>
					{/* <div className='animate-fade-right'>
						<h3 className=''>Czas: 1h</h3>
					</div> */}
					<div className='animate-fade-left'>
						<h3 className=''> Cena: 250zł</h3>
					</div>
				</div>
			</article>

			<article className='w-[90%] flex flex-col gap-8 py-4 md:py-8'>
				<div>
					<fieldset>
						<legend className='md:text-xl'>Zabieg ANTI AGE</legend>
						<p className='py-6 pr-4'>
							Pobudza skórę do produkcji kolagenu i elastyny, których to
							składników z wiekiem skóra produkuje coraz mniej.<br></br> Zabieg
							można stosować okazjonalnie jako zabieg „bankietowy”, bo napina i
							uelastycznia lub jako kurację przeciwzmarszczkową. <br></br>
							Efektem zabiegu jest ujędrniona, rozświetlona i odżywiona skóra.
							Najlepsze rezultaty przynosi zastosowanie serii zabiegów.
						</p>
						{/* <p className='pr-4'>
							<strong>Przebieg zabiegu: </strong>
							demakijaż + tonizajca + <br></br> peeling kawitacyjny + peeling na
							bazie kwasu szikimowego + maska + serum + krem.
						</p>
						<p className='py-4 pr-4'>
							<strong>Efekty zabiegu:</strong> regulacja mikrobiomu skóry,
							regulacja wydzielania sebum, wyciszenie stanów zapalnych,
							stopniowe usunięcie zaskórnków. <br></br>Najlepsze rezultaty
							przynosi seria min. 4 zabiegów co 10-14 dni.
						</p> */}
					</fieldset>
				</div>

				<div className='flex self-end'>
					{/* <div className='animate-fade-right'>
						<h3 className=''>Czas: 1h</h3>
					</div> */}
					<div className='animate-fade-left'>
						<h3 className=''> Cena: 270zł</h3>
					</div>
				</div>
			</article>

			<article className='w-[90%] flex flex-col gap-8 py-4 md:py-8'>
				<div>
					<fieldset className='flex items-center justify-center'>
						<h3 className='py-8 pr-4 text-xl'>
							Oczyszczanie wodorowe + Zabieg nawilżający
						</h3>
					</fieldset>
				</div>

				<div className='flex self-end'>
					<div className='animate-fade-left'>
						<h3 className=''> Cena: 350zł</h3>
					</div>
				</div>
			</article>

			<article className='w-[90%] flex flex-col gap-8 py-4 md:py-8'>
				<div>
					<fieldset className='flex items-center justify-center'>
						<h3 className='py-8 pr-4 text-xl'>
							Oczyszczanie wodorowe + Zabieg ANTI ACNE
						</h3>
					</fieldset>
				</div>

				<div className='flex self-end'>
					<div className='animate-fade-left'>
						<h3 className=''> Cena: 350zł</h3>
					</div>
				</div>
			</article>

			<article className='w-[90%] flex flex-col gap-8 py-4 md:py-8'>
				<div>
					<fieldset className='flex items-center justify-center'>
						<h3 className='py-8 pr-4 text-xl'>
							Oczyszczanie wodorowe + Zabieg ANTI AGE
						</h3>
					</fieldset>
				</div>

				<div className='flex self-end'>
					<div className='animate-fade-left'>
						<h3 className=''> Cena: 370zł</h3>
					</div>
				</div>
			</article>
		</section>
	);
};

export default CosmetologyServices;
