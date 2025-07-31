import CosmetologyHeader from "@/components/CosmetologyComponents/CosmetologyHeader";
import CosmetologyServices from "@/components/CosmetologyComponents/CosmetologyServices";

import Head from "next/head";

const CosmetologyPage = () => {
	return (
		<>
			<Head>
				<link
					rel='canonical'
					href='https://olatomasiewicz.pl/szkolenia'
				/>
			</Head>
			<CosmetologyHeader />
			<CosmetologyServices />
		</>
	);
};

export default CosmetologyPage;
