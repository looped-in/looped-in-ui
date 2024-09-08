/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Button from "../Button";
import Image from "next/image";

const TopBannerHomepage = () => {
	return (
		<div className="flex flex-row p-10 space-x-4">
			<div className="w-1/2 space-y-6">
				<div className="text-4xl font-medium">
					Collaboration tools you'll love for the jobs you don't.
				</div>

				<div className="text-sm">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus morbi
					est porttitor velit, sit bibendum vitae blandit. Viverra orci ornare
					vehicula mauris purus pulvinar diam, vel. Odio pharetra mauris metus
					scelerisque.
				</div>

				<div className="text-sm flex flex-row ">
					<Button label="Sign in" className="w-1/3" />
					<div className="text-center w-1/2 content-around">Find a Builder</div>
				</div>
			</div>

			<div className="w-1/2">
				<Image
					src="/find-builder.png"
					width={1000}
					height={1000}
					alt="homepage-banner"
					className="rounded-xl"
				/>
			</div>
		</div>
	);
};

export default TopBannerHomepage;
