import Divider from "../Divider/Divider";

const CosmetologyServices = () => {
	return (
		<section
			id='lekcja-makijazu'
			className='section w-full min-h-[100svh] flex flex-col items-center py-8 md:py-20  overflow-hidden lg:max-w-[950px] lg:mx-auto'
		>
			<div className='w-[90%] flex flex-col py-8 md:py-12'>
				<h1 className='text-4xl pb-6 text-center '>Kosmetologia</h1>
				<p className='text-center pb-4 text-xl'>
					Zabiegi pielęgnacyjne na twarz
				</p>
				<Divider width={100} />
			</div>
			<article className='w-[90%] flex flex-col gap-8 py-2 md:py-8'>
				<div>
					<fieldset>
						<legend className='md:text-xl'>
							Zabieg NAWILŻAJĄCY (z masażem kosmetycznym)
						</legend>
						<p className='py-6 pr-4'>
							Zabieg głęboko nawilżający, regeneruje uszkodzoną barierę
							hydrolipidową, przywraca skórze elastyczność i normalizuje proces
							rogowacenia naskórka.
						</p>
						<p className=''>
							<strong>Przebieg zabiegu:</strong> demakijaż + tonizacja +{" "}
							<br></br>peeling na bazie kwasu mlekowego + serum + <br></br>{" "}
							masaż kosmetyczny (15-20min) + maska + krem
						</p>
						<p className='py-4'>
							<strong>Efekty zabiegu:</strong> nawilżenie, odżywienie i
							wygładzenie skóry.
						</p>
					</fieldset>
				</div>

				<div className='flex justify-between'>
					<div className='animate-fade-right'>
						<h3 className=''>Czas: 1h</h3>
					</div>
					<div className='animate-fade-left'>
						<h3 className=''> Cena: 200zł</h3>
					</div>
				</div>
			</article>
			<article className='w-[90%] flex flex-col gap-8 py-8 '>
				<div>
					<fieldset>
						<legend className='md:text-xl'>
							Zabieg ANTI AGE (liftingujący - bankietowy)
						</legend>
						<p className='py-6 pr-4'>
							Zabieg można stosować przed “wielkim wyjściem” lub w serii 5-10
							zabiegów jako profilaktykę przeciwzmarszczkową.<br></br> Stosowany
							regularnie przebudowuje skórę, działa ujędrniająco i wygładzająco.
						</p>
						<p className=''>
							<strong>Przebieg zabiegu:</strong> demakijaż + tonizacja +{" "}
							<br></br>maska Neuro Gaba + peeling Neuro Gaba + <br></br>serum +
							krem
						</p>
						<p className='py-4'>
							<strong>Efekty zabiegu:</strong> natychmiastowe wygładzenie
							zmarszczek, ujędrnienie i nawilżenie skóry, rozluźnienie mięśni
							mimicznych.
						</p>
					</fieldset>
				</div>

				<div className='flex justify-between'>
					<div className='animate-fade-right'>
						<h3 className=''>Czas: 1:20 h</h3>
					</div>
					<div className='animate-fade-left'>
						<h3 className=''>
							{" "}
							Cena: 250 zł (twarz),<br></br> 290 zł (twarz + szyja)
						</h3>
					</div>
				</div>
			</article>
			<article className='w-[90%] flex flex-col gap-8 py-4 md:py-8'>
				<div>
					<fieldset>
						<legend className='md:text-xl'>
							Zabieg ANTI ACNE - dla skór tłustych i trądzikowych
						</legend>
						<p className='py-6 pr-4'>
							Zabieg reguluje pracę gruczołów łojowych, hamuje proces
							powstawania niedoskonałości,<br></br> złuszcza naskórek, działa
							antybakteryjnie, redukuje stany zapalne.
						</p>
						<p className='pr-4'>
							<strong>Przebieg zabiegu: </strong>
							demakijaż + tonizajca + <br></br> peeling kawitacyjny + peeling na
							bazie kwasu szikimowego + maska + serum + krem.
						</p>
						<p className='py-4 pr-4'>
							<strong>Efekty zabiegu:</strong> regulacja mikrobiomu skóry,
							regulacja wydzielania sebum, wyciszenie stanów zapalnych,
							stopniowe usunięcie zaskórnków. <br></br>Najlepsze rezultaty
							przynosi seria min. 4 zabiegów co 10-14 dni.
						</p>
					</fieldset>
				</div>

				<div className='flex justify-between'>
					<div className='animate-fade-right'>
						<h3 className=''>Czas: 1h</h3>
					</div>
					<div className='animate-fade-left'>
						<h3 className=''> Cena: 200zł</h3>
					</div>
				</div>
			</article>
		</section>
	);
};

export default CosmetologyServices;
