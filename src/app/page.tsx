import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import CallToActionHome from "@/components/CTAHome/CtaHome";
// import AnimationMain from "@/components/MainPageAnimation/Splashscreen";
import PageHeader from "@/components/PageHeader/PageHeader";
import Portfolio from "@/components/Portfolio/Portfolio";

export default function Home() {
	const pageId = 12;

	return (
		<>
			{/* <AnimationMain /> */}
			<PageHeader pageId={pageId} />
			<About />
			<Portfolio />
			<CallToActionHome />
			<Contact />
		</>
	);
}
