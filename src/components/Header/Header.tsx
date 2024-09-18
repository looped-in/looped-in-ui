import Image from "next/image";
import React from "react";
import Button from "../Button";
import Link from "next/link";

const HEADER_LINKS = [
	{ label: "About", href: "/" },
	{ label: "How it works", href: "/how-it-work" },
	{ label: "Our Team", href: "/our-team" },
	{ label: "Find a builder", href: "/find-builder" },
	{ label: "Get in touch", href: "/get-in-touch" }
];

const Header = () => {
	return (
		<div className="p-16">
			<div className="flex flex-row place-content-between">
				<Image src="/logo.svg" alt="logo" width={150} height={150} />

				{/* Menu */}
				<div className="flex flex-row space-x-6 align-middle content-around text-sm font-semibold">
					{HEADER_LINKS.map(({ label, href }) => (
						<Link
							href={href}
							key={href}
							className="content-around hover:text-[#ff7338]"
						>
							{label}
						</Link>
					))}

					<div className="content-around align-middle hover:text-[#ff7338]">
						<Link href="/sign-in">
							<Button label="Sign in" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
