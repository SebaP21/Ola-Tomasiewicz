import About from "@/components/About/About";
import PageHeader from "@/components/PageHeader/PageHeader";
import Portfolio from "@/components/Portfolio/Portfolio";

export default function Home() {
	const pageId = 12;

	return (
		<>
			<PageHeader pageId={pageId} />
			<About />
			<Portfolio />
			<About />
		</>
	);
}
