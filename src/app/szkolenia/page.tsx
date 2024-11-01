import PageHeader from "@/components/PageHeader/PageHeader";
import HairTraining from "@/components/Training/HairTraining/HairTraining";
import IndividualTraining from "@/components/Training/IndividualTraining/IndividualTraining";
import MakeUpTraining from "@/components/Training/MakeupTraining/MakeupTraining";

const WorkShopsPage = () => {
	const pageId = 220;

	return (
		<>
			<PageHeader pageId={pageId} />
			<MakeUpTraining />
			<HairTraining />
			<IndividualTraining />
		</>
	);
};

export default WorkShopsPage;
