import { render, screen } from "@testing-library/react";
import Home from "../page";
import "@testing-library/jest-dom";

describe("Page", () => {
	it("renders a heading", () => {
		render(<Home />);
		expect(screen.getByText("Get started by editing")).toBeInTheDocument();
	});

	it("SHOULD match snapshot", () => {
		const { container } = render(<Home />);
		expect(container).toMatchSnapshot();
	});
});
