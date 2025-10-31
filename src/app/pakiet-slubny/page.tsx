import OfflineDesktopNav from "@/components/WeddingPackage/OfflineDesktopNav";
import WeddingPackage from "@/components/WeddingPackage/WeddingPackage";

import Head from "next/head";

const WeddingPage = () => {
	return (
		<>
			<Head>
				<link
					rel='canonical'
					href='https://olatomasiewicz.pl/pakiet-slubny'
				/>
			</Head>
			<OfflineDesktopNav />
			<WeddingPackage />
		</>
	);
};

export default WeddingPage;
