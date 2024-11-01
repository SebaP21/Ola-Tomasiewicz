import PageHeader from "@/components/PageHeader/PageHeader";
import PriceList from "@/components/PriceList/PriceList";
import WeddingPackage from "@/components/WeddingPackage/WeddingPackage";

const PriceListPage = () => {
	const pageId = 18;

	return (
		<>
			<PageHeader pageId={pageId} />
			<PriceList/>
			<WeddingPackage/>
		</>
	);
};

export default PriceListPage;
