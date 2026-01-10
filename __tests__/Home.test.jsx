import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Page", () => {
  it("renders name and role", () => {
    render(<Home />);
    expect(screen.getByText("John Howard P. Garcia")).toBeInTheDocument();
    expect(screen.getByText("Front-End Developer")).toBeInTheDocument();
  });
});
