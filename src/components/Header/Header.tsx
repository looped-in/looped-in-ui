import Image from "next/image";
import React from "react";
import Button from "../Button";
import Link from "next/link";
import { redirectButton } from "@/app/actions/actions";

const Header = () => {
	const redirect = async () => {
		redirectButton();
	};

	return (
		<div className="p-16">
			<div className="flex flex-row place-content-between">
				<Image src="/logo.svg" alt="logo" width={150} height={150} />

				{/* Menu */}
				<div className="flex flex-row space-x-6 align-middle content-around text-sm font-semibold">
					<Link href="/" className="content-around hover:text-[#ff7338]">
						About
					</Link>

					<Link
						href="/how-it-work"
						className="content-around hover:text-[#ff7338]"
					>
						How it works
					</Link>

					<Link href="/" className="content-around hover:text-[#ff7338]">
						Our Team
					</Link>

					<Link href="/" className="content-around hover:text-[#ff7338]">
						Find a builder
					</Link>

					<Link href="/" className="content-around hover:text-[#ff7338]">
						Get in touch
					</Link>

					<div className="content-around align-middle hover:text-[#ff7338]">
						<Link href={"/sign-in"}>
							<Button label="Sign in" />
						</Link>
					</div>
				</div>

				{/* <div className="content-around"></div> */}
			</div>
		</div>
	);
};

export default Header;
