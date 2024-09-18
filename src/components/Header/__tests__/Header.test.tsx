import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";

describe("Header", () => {
	it("SHOULD match snapshot", () => {
		const { asFragment } = render(<Header />);
		expect(asFragment()).toMatchSnapshot();
	});

	it("renders the logo", () => {
		render(<Header />);
		const logo = screen.getByAltText("logo");
		expect(logo).toBeInTheDocument();
	});

	it("renders all navigation links", () => {
		render(<Header />);
		const links = [
			{ href: "/", text: "About" },
			{ href: "/how-it-work", text: "How it works" },
			{ href: "/our-team", text: "Our Team" },
			{ href: "/find-builder", text: "Find a builder" },
			{ href: "/get-in-touch", text: "Get in touch" },
			{ href: "/sign-in", text: "Sign in" },
		];

		for (const link of links) {
			const anchor = screen.getByText(link.text);
			expect(anchor).toBeInTheDocument();
			expect(anchor.closest("a")).toHaveAttribute("href", link.href);
		}
	});

	it("renders the Sign in button", () => {
		render(<Header />);
		const signInButton = screen.getByText("Sign in");
		expect(signInButton).toBeInTheDocument();
	});
});
