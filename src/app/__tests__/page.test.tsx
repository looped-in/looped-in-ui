import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Homepage from "@/components/Homepage";

describe("Page", () => {
	it("SHOULD match snapshot", () => {
		const { container } = render(<Homepage />);
		expect(container).toMatchSnapshot();
	});

	it("SHOULD renders correct heading", () => {
		render(<Homepage />);
		expect(
			screen.getByText(
				"Collaboration tools you'll love for the jobs you don't.",
			),
		).toBeInTheDocument();
	});
});
