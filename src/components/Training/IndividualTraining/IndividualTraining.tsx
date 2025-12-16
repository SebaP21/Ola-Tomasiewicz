import client from "../../../../lib/apolloClient";
import { PrivateLessonContentQuery } from "../../../../lib/generated/graphql";
import Divider from "@/components/Divider/Divider";
import AnimatedGallery from "./ImageAnimator";
import { PRIVATE_LESSON_CONTENT } from "@/graphql/PrivateLessonQuery";

const IndividualTraining = async () => {
	const { data } = await client.query<PrivateLessonContentQuery>({
		query: PRIVATE_LESSON_CONTENT,
	});

	const title = data.szkoleniaTypeBy?.individualMasterclass?.tytulSzkolenia;
	// const subtitle = data.szkoleniaTypeBy?.individualMasterclass?.podtytul;
	const scopeOfTraining =
		data.szkoleniaTypeBy?.individualMasterclass?.masterclassdescription;
	const time = data.szkoleniaTypeBy?.individualMasterclass?.czasTrwania;
	// const price = data.szkoleniaTypeBy?.individualMasterclass?.cena;

	const gallery =
		data.szkoleniaTypeBy?.individualMasterclass?.individualLessonGalleryBox
			?.nodes;

	return (
		<section
			id='lekcja-makijazu'
			className='section w-full min-h-[100svh] flex flex-col items-center p-4 overflow-hidden lg:max-w-[950px] lg:mx-auto'
		>
			<article className='w-[90%] flex flex-col gap-8'>
				<div className='w-full flex flex-col gap-4'>
					<Divider width={100} />
					<h2 className='text-3xl text-center pt-4'>{title}</h2>
				</div>
				<p>Indywidualna lekcja makijażu.</p>

				<div>
					<fieldset>
						<legend className='text-xl'>Zakres szkolenia</legend>
						<ul className='pt-2 pr-4 pb-2'>
							{scopeOfTraining?.map((type) => (
								<li
									key={type?.listElementBox}
									className='text-text'
								>
									<span className='text-accent'>• </span> {type?.listElementBox}
								</li>
							))}
						</ul>
					</fieldset>
				</div>

				<div className='flex justify-between'>
					<div className='animate-fade-right'>
						<h3 className=''>{time}</h3>
					</div>
					<div className='animate-fade-left'>
						<h3 className=''>450 zł</h3>
					</div>
				</div>

				<AnimatedGallery gallery={gallery} />
			</article>
		</section>
	);
};

export default IndividualTraining;
