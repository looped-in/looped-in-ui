import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopBannerHomepage from "@/components/TopBannerHomepage";
import React from "react";
import FindBuilder from "../FindBuilder";
import Processes from "../Processes";

const Homepage = () => {
	return (
		<div>
			<Header />

			<TopBannerHomepage />

			<FindBuilder />

			<Processes />

			<Footer />
		</div>
	);
};

export default Homepage;
