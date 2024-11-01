import Divider from "@/components/Divider/Divider";
import PageHeader from "@/components/PageHeader/PageHeader";
import StatuteBox from "@/components/statuteBox/StatuteBox";

const RegulationsPage = () => {
	const pageId = 146;

	return (
		<>
			<PageHeader pageId={pageId} />
			<section className="flex justify-center items-center ">
				<div
                className="min-h-[70svh] w-[90%] flex flex-col items-center  py-8  sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[60%]"
                >
					<div className="w-[70%] pt-4 pb-8 ">
                    <h1 className="text-4xl mb-4 text-center">Regulamin usług</h1>
					<Divider width={100} />
                    </div>
					<StatuteBox />
				</div>
			</section>
		</>
	);
};

export default RegulationsPage;
