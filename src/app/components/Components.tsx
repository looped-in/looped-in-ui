"use client";

import type React from "react";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Input from "@/components/Input";
import Header from "@/components/Header";
import FindBuilder from "@/components/FindBuilder";
import TopBannerHomepage from "@/components/TopBannerHomepage";

const Components = () => {
	return (
		<div className="p-10 space-y-5">
			<div className="text-center p-5">
				<div className="text-3xl font-semibold">Loopedin Components </div>
			</div>

			<Component
				name="Button"
				component={
					<Button
						label="Sign in"
						onClick={() => {
							alert("Clicked");
						}}
					/>
				}
			/>

			<Component
				name="Input"
				component={
					<Input className="w-48" name="Name" placeholder="Input your name" />
				}
			/>

			<Component name="Header" component={<Header />} />

			<Component name="TopBannerHomepage" component={<TopBannerHomepage />} />

			<Component name="Find a Builder section" component={<FindBuilder />} />

			<Component name="Footer" component={<Footer />} />
		</div>
	);
};

const Component = ({
	name,
	component,
}: { name: string; component: React.ReactNode }) => {
	return (
		<div className="flex flex-col space-y-2">
			<div>
				Component: <b>{name}</b>
			</div>
			<div className="pb-8">{component}</div>
		</div>
	);
};

export default Components;
